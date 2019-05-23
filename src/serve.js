const express = require('express')
const mongoose = require('mongoose')

class App {
  constructor () {
    this.express = express()
    this.dataBase()
    this.middleware()
    this.router()
  }
  dataBase () {
    mongoose.connect('mongodb://localhost:27017/atividade', {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }
  middleware () {
    this.express.use(express.json())
  }

  router () {
    this.express.use(require('./router'))
  }
}

module.exports = new App().express
