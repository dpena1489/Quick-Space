const mongoose = require('mongoose');
const { Schema } = mongoose;


function convertDate (date){
  return date.toLocaleString();
}

const bookingSchema = new Schema({
  listing: {
    type: Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  startTime: {
    type: Date,
    required: true, 
    get: (timestamp)=> convertDate(timestamp)
  },
  endTime: {
    type: Date,
    required: true,
    get: (timestamp)=> convertDate(timestamp)
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // isPaid? boolean
}, 
{
  id: false, 
  toJSON: {
    getters: TransformStreamDefaultController
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;