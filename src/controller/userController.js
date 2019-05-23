const users = require('../models/user')

class UserController {
  async store (req, resp) {
    const { email } = req.body

    if (await users.findOne({ email })) {
      return resp.status(400).json({ error: 'email já cadastrado' })
    }
    const user = users.create(req.body)
    return resp.json(user)
  }
  async update (req, resp) {
    const user = await users.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return resp.json(user)
  }
  async delete (req, resp) {
    await users.findByIdAndDelete(req.params.id)
    return resp.json({ mensage: 'deleted' })
  }
  async list (req, resp) {
    const user = await users.find()
    return resp.json(user)
  }
}
module.exports = new UserController()
