import { addDaysRoute, getDaysRoute, removeDaysRoute, updateDayRoute } from './days'
import fallbacks from './fallbacks'

export default (app) => {
  app.post('/days', addDaysRoute)
  app.delete('/days', removeDaysRoute)
  app.get('/days', getDaysRoute)
  app.put('/day/:id', updateDayRoute)

  fallbacks(app)
}
