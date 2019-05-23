const mongoose = require('mongoose')

const SchemaNotice = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('notice', SchemaNotice)
