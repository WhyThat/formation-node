import { addDaysRoute, getDaysRoute, removeDaysRoute, updateDayRoute } from './days'
import fallbacks from './fallbacks'
import { userValidator } from './middleware/user.middleware.mjs'
import { addUserRoute } from './user'

export default (app) => {
  app.post('/days', addDaysRoute)
  app.delete('/days', removeDaysRoute)
  app.get('/days', getDaysRoute)
  app.put('/day/:id', updateDayRoute)

  app.post('/addUser', userValidator, addUserRoute)
  fallbacks(app)
}
