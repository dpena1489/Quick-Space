const reviewSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    listing: {
      type: Schema.Types.ObjectId,
      ref: 'Listing',
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    },
    comment: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const Review = mongoose.model('Review', reviewSchema);