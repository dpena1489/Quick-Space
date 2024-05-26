const { User, Listing, Category, Booking } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {

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

    booking: async (parent, { _id }, context) => {
      if (context.user){
        return await Booking.findById(_id);
      }
      throw AuthenticationError
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

      createBooking: async (parent, args, context) => {
        if(context.user){
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
