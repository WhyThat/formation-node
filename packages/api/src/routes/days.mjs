import Day from '../model/Day'
import User from '../model/User'

export const getDaysRoute = (req, res) => {
  res.status(200).json({ route: 'getDays' })
}

export const addDaysRoute = (req, res) => {
  // TODO: do things with req.body
  const day = new Day({ description: 'test', date: new Date(2019, 4, 11) })

  User.findOneAndUpdate(
    {},
    { firstName: 'John', lastName: 'Doe', days: [day] },
    { upsert: true, new: true },
    (err, doc) => {
      if (err) return res.status(500).json({ error: err })
      return res.status(201).json({ user: doc })
    },
  )
}

export const updateDayRoute = (req, res) => {
  res.status(202).json({ route: 'updateDay' })
}

export const removeDaysRoute = (req, res) => {
  res.status(204).json({ route: 'removeDays' })
}
