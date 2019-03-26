import { addDaysRoute, getDaysRoute, removeDaysRoute, updateDayRoute } from '../days'

describe('routes: days', () => {
  const json = jest.fn()
  let res
  beforeEach(() => {
    res = { status: jest.fn(() => ({ json })) }
  })
  test('getDays', () => {
    getDaysRoute(null, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(json).toHaveBeenCalledWith({ route: 'getDays' })
  })
  test.skip('addDays', () => {
    addDaysRoute(null, res)
    expect(res.status).toHaveBeenCalledWith(201)
    expect(json).toHaveBeenCalledWith({ route: 'addDays' })
  })
  test('updateDays', () => {
    updateDayRoute(null, res)
    expect(res.status).toHaveBeenCalledWith(202)
    expect(json).toHaveBeenCalledWith({ route: 'updateDay' })
  })
  test('removeDays', () => {
    removeDaysRoute(null, res)
    expect(res.status).toHaveBeenCalledWith(204)
    expect(json).toHaveBeenCalledWith({ route: 'removeDays' })
  })
})
