export default (app) => {
  app.put('*', (req, res) => {
    res.status(404).json({ status: 'not found' })
  })
  app.delete('*', (req, res) => {
    res.status(404).json({ status: 'not found' })
  })
  app.post('*', (req, res) => {
    res.status(404).json({ status: 'not found' })
  })
  app.get('*', (req, res) => {
    res.status(404).json({ status: 'not found' })
  })
}
