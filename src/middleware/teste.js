module.exports = async (req, resp, next) => {
  req.teste = '123'
  console.log('123')
  next()
}
