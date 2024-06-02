const { User, Listing, Category, Booking } = require('../models');
const { populate } = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PHFPXLGaswMygELIHIwpTp5hjiN4ddyjFdIN81EnC5hb0jmeSnVsxKFYT60LCUglNbMACzmowFSIOIHtspDwlZT00a0byD2j2');
const { calculateTotalHours } = require('../utils/convertTime')


const resolvers = {
  Query: {

    user: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id).populate({
          path: 'bookings',
          populate: {
            path: 'listing', 
            model: 'Listing', 
            populate: {
              path: 'category',
              model: 'Category'
            }
          }, 
          options: { sort: { createdAt: -1 } }
        });
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
      // if (context.user) {
      return await Listing.find({ category: category }).populate('category');
      // }
      // throw AuthenticationError
    },

    booking: async (parent, { _id }, context) => {
      if (context.user) {
        return await Booking.findById(_id).populate('listing');
      }
      throw AuthenticationError

    },
    checkout: async (parent, { listingId, phQuantity, startTime, endTime }, context) => {
      try {

        // calculate the total hours by ttaking the start time and end time
        const totalHours = calculateTotalHours(startTime, endTime)
       

        const convertedStartTime = new Date(startTime).toLocaleString()
        const convertedEndTime = new Date(endTime).toLocaleString()
        


        const url = new URL(context.headers.referer).origin;
        const listingData = await Listing.findById(listingId).populate('category');
        const bookingData = await Booking.create({ listing: listingId, startTime: convertedStartTime, endTime: convertedEndTime, totalPrice: listingData.pricePerHour * totalHours })


        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { bookings: bookingData._id } },
          { new: true }
        );

        const line_items = [];
        const listingImg = await listingData.images.map((listing) => {
        
          return listing
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
          quantity: totalHours
        })


        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/profile`,
          cancel_url: `${url}/`,
        });

        console.log(session.id);
        return { session: session.id };
      } catch (error) {
        console.log(error);
      }
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
