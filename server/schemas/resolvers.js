const { User, Listing, Category, Booking } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {

    user: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id).populate('bookings');
      }
      throw AuthenticationError
    },
    categories: async (parent, args, context) => {
      return await Category.find({});
    },
    category: async (parent, { id }, context) => {
      return await Category.findById(id);
    },
    listings: async (parent, args, context) => {
      if (context.user) {

        return await Listing.find({}).populate('category');
      }
      throw AuthenticationError
    },
    listing: async (parent, { listingId }, context) => {
      if (context.user) {
        return await Listing.findById(listingId).populate('category');

      }
      throw AuthenticationError
    },

    listingsByCategory: async (parent, { category }, context) => {
      if (context.user) {
        return await Listing.find({ category: category }).populate('category');
      }
      throw AuthenticationError
    },

    booking: async (parent, { _id }, context) => {
      if (context.user) {
        return await Booking.findById(_id);
      }
      throw AuthenticationError

    },
    checkout: async (parent, { listingId, phQuantity }, context) => {
      const url = new URL(context.headers.referer).origin;
      const listingData = await Listing.findById(listingId).populate('category');

      const line_items = [];
      const listingImg = await listingData.images.map((listing)=> {
        return `${url}/images/${listing.image}`
      })

      const product = await stripe.products.create({
        name: listingData.title,
        description: listingData.description,
        images: listingImg,
      })

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: listingData.pricePerHour * 100,
        currency: 'usd',
      })

      line_items.push({
        price: price.id,
        quantity: phQuantity
      })


      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  // order: async (parent, { _id }, context) => {
  //   if (context.user) {
  //     const user = await User.findById(context.user._id).populate({
  //       path: 'orders.products',
  //       populate: 'category',
  //     });

  //     return user.orders.id(_id);
  //   }

  //   throw AuthenticationError;
  // },

  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    createBooking: async (parent, args, context) => {
      if (context.user) {
        const booking = await Booking.create(args)
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { bookings: booking._id } },
          { new: true }
        );
        return updatedUser
      }
      throw AuthenticationError
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },

};

module.exports = resolvers;
