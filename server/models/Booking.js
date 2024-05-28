const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({

  listing: {
    type: Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
  // isPaid? boolean
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;