const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const SchemaUser = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

SchemaUser.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = await bcryptjs.hash(this.password, 8)
})

SchemaUser.methods = {
  compareHash (password) {
    return bcryptjs.compare(password, this.password)
  }
}

SchemaUser.statics = {
  generateToken ({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }
}

module.exports = mongoose.model('user', SchemaUser)
