import bodyParser from 'body-parser'
import express from 'express'
import { debugMiddleware } from './middleware'
import routes from './routes'
import db from './utils/db'

const main = async () => {
  const app = express()
  // parse application/json
  app.use(bodyParser.json())
  app.use(debugMiddleware(console.log))

  routes(app)
  await db()

  app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
}

main()
