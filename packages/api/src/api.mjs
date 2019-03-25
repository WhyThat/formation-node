import bodyParser from 'body-parser'
import express from 'express'
import { debugMiddleware } from './middleware'
// eslint-disable-next-line no-unused-vars
import { addDaysRoute, getDaysRoute, removeDaysRoute, updateDayRoute } from './routes/days'

const app = express()
// parse application/json
app.use(bodyParser.json())
app.use(debugMiddleware(console.log))

app.post('/days', addDaysRoute)
app.delete('/days', removeDaysRoute)
app.get('/days', getDaysRoute)
app.put('/day/:id', updateDayRoute)

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

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
