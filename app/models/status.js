const mongoose = require('mongoose')

const statusSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    comment: [{ name: String, message: String }],
    review: [{ name: String, point: Number }],

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Status', statusSchema)
