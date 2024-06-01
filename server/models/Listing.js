const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  images: [
    {
      type: String
    },
  ],
  pricePerHour: {
    type: Number,
    required: true,
    min: 50.00
  },
  availability: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  // reviews: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Review'
  //   }
  // ],
  capacity: {
    type: Number,
    min: 1,
  },
  rules: {
    type: String
  },
  amenities: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, 
{
  id: false
});

const Listing = model('Listing', listingSchema);

module.exports = Listing;
