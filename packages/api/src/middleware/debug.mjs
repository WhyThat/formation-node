export default logger => (req, res, next) => {
  if (process.env.DEBUG === 'true') {
    logger(`${req.originalUrl} : `, JSON.stringify(req.body))
  }
  next()
}
