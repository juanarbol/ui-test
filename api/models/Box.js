const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  imgSrc: {
    required: true,
    type: String
  },
  votes: [{
    liked: Boolean,
    user: {
      ref: 'User',
      type: mongoose.Schema.Types.ObjectId
    }
  }]
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

boxSchema.statics.vote = function (boxId, votes) {
  return this.model('Box').findByIdAndUpdate(boxId, { $push: { votes: { ...votes } } })
}

module.exports = mongoose.model('Box', boxSchema)
