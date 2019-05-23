const express = require('express')
const middleware = require('./middleware/token')
const controller = require('./controller')

// const UserControler = require('./controller/userController')

// const NoticeController = require('./controller/noticeController')
const routes = express.Router()

routes.post('/user', controller.UserControler.store)
routes.get('/user', controller.UserControler.list)
routes.delete('/user/:id', controller.UserControler.delete)
routes.put('/user/:id', controller.UserControler.update)

routes.post('/session', controller.SessionController.store)

routes.use(middleware)

routes.post('/notice', controller.NoticeController.store)
routes.get('/notice', controller.NoticeController.list)
routes.delete('/notice/:id', controller.NoticeController.delete)
routes.put('/notice/:id', controller.NoticeController.update)
module.exports = routes
