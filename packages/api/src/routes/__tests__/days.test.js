import { addDaysRoute, getDaysRoute, removeDaysRoute, updateDaysRoute } from '../days'

describe('routes: days', () => {
  let res
  beforeEach(() => {
    res = { json: jest.fn() }
  })
  test('getDays', () => {
    getDaysRoute(null, res)
    expect(res.json).toHaveBeenCalledWith({ route: 'getDays' })
  })
  test('addDays', () => {
    addDaysRoute(null, res)
    expect(res.json).toHaveBeenCalledWith({ route: 'addDays' })
  })
  test('updateDays', () => {
    updateDaysRoute(null, res)
    expect(res.json).toHaveBeenCalledWith({ route: 'updateDays' })
  })
  test('removeDays', () => {
    removeDaysRoute(null, res)
    expect(res.json).toHaveBeenCalledWith({ route: 'removeDays' })
  })
})
