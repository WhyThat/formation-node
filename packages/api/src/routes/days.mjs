export const getDaysRoute = (req, res) => {
  res.status(200).json({ route: 'getDays' })
}

export const addDaysRoute = (req, res) => {
  res.status(201).json({ route: 'addDays' })
}

export const updateDayRoute = (req, res) => {
  console.dir(req)
  res.status(202).json({ route: 'updateDay' })
}

export const removeDaysRoute = (req, res) => {
  res.status(204).json({ route: 'removeDays' })
}
