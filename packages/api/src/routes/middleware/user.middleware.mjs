// eslint-disable-next-line import/prefer-default-export
export const userValidator = (req, res, next) => {
  if (!req.body) return res.status(400).json({ error: 'Empty body mother fucker' })
  const { firstName, lastName } = req.body
  if (!firstName || !lastName) return res.status(400).json({ error: 'lastName or FirstName not defined' })
  return next()
}
