const Notice = require('../models/notice')
class NoticeController {
  async store (req, resp) {
    const notice = await Notice.create({ ...req.body, user: req.userId })
    return resp.json(notice)
  }
  async update (req, resp) {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return resp.json(notice)
  }
  async delete (req, resp) {
    await Notice.findByIdAndDelete(req.params.id)
    return resp.json({ mesage: 'deleted' })
  }
  async list (req, resp) {
    const notice = await Notice.find()
    return resp.json(notice)
  }
}

module.exports = new NoticeController()
