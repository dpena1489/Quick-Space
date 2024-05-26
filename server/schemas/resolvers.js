const { User, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { User, Listing, Category, Booking } = require('../models');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    // users: async (parent, args, context) => {
    //   return await User.find({});
    // },
    user: async (parent, args, context) => {
      if(context.user){
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
      if (context.user){

        return await Listing.find({});
      }
      throw AuthenticationError
    },
    listing: async (parent, { id }, context) => {
      if (context.user){

        return await Listing.findById(id);
        
      }
      throw AuthenticationError
    },
    // bookings: async (parent, args, context) => {
    //   return await Booking.find({});
    // },
    // booking: async (parent, { id }, context) => {
    //   return await Booking.findById(id);
    // },
  },
    // categories: async () => {
    //   return await Category.find();
    // },
    // products: async (parent, { category, name }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name,
    //     };
    //   }

    //   return await Product.find(params).populate('category');
    // },
    // product: async (parent, { _id }) => {
    //   return await Product.findById(_id).populate('category');
    // },
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category',
    //     });

    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }

    //   throw AuthenticationError;
    // },
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
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   // We map through the list of products sent by the client to extract the _id of each item and create a new Order.
    //   await Order.create({ products: args.products.map(({ _id }) => _id) });
    //   const line_items = [];

    //   for (const product of args.products) {
    //     line_items.push({
    //       price_data: {
    //         currency: 'usd',
    //         product_data: {
    //           name: product.name,
    //           description: product.description,
    //           images: [`${url}/images/${product.image}`],
    //         },
    //         unit_amount: product.price * 100,
    //       },
    //       quantity: product.purchaseQuantity,
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`,
    //   });

    //   return { session: session.id };
    // },

    Mutation: {
      createUser: async (parent, args, context) => {
        const user =  await User.create(args);
        const token =  signToken(user);
        return { token, user };
      },
      createCategory: async (parent, { name }, context) => {
        const category = new Category({ name });
        return await category.save();
      },
      createListing: async (parent, { title, owner, address, description, image, pricePerHour, availability, rating, capacity, rules, amenities, categoryId }, context) => {
        const listing = new Listing({ title, owner, address, description, image, pricePerHour, availability, rating, capacity, rules, amenities, category: categoryId });
        return await listing.save();
      },
      createBooking: async (parent, { userId, listingId, startTime, endTime, totalPrice }, context) => {
        const booking = new Booking({ user: userId, listing: listingId, startTime, endTime, totalPrice });
        return await booking.save();
      },
    },

    // addUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user);

    //   return { token, user };
    // },
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
    // addOrder: async (parent, { products }, context) => {
    //   if (context.user) {
    //     const order = new Order({ products });

    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { orders: order },
    //     });

    //     return order;
    //   }

    //   throw AuthenticationError;
    // },
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, {
    //       new: true,
    //     });

    //   }

    //   throw AuthenticationError;
    // },
    // updateProduct: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;
    //   return await Product.findByIdAndUpdate(
    //     _id,
    //     { $inc: { quantity: decrement } },
    //     { new: true }
    //   );
    // },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw AuthenticationError;
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw AuthenticationError;
    //   }

    //   const token = signToken(user);

    //   return { token, user };
    // },

    // User: {
    //   bookings: async (parent, args, context) => {
    //     return await Booking.find({ user: parent.id });
    //   },
    // },
    // Listing: {
    //   category: async (parent, args, context) => {
    //     return await Category.findById(parent.category);
    //   },
    // },
    // Booking: {
    //   user: async (parent, args, context) => {
    //     return await User.findById(parent.user);
    //   },
    //   listing: async (parent, args, context) => {
    //     return await Listing.findById(parent.listing);
    //   },
    // },
  };
  
  module.exports = resolvers;
