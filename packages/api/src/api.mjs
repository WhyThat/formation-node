import bodyParser from 'body-parser'
import express from 'express'
import { debugMiddleware } from './middleware'

const app = express()
// parse application/json
app.use(bodyParser.json())
app.use(debugMiddleware(console.log))

app.get('*', (req, res) => {
  res.send({ message: 'hello world' })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
