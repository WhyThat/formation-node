import debugMiddleware from '../debug'

describe('debugMiddleware', () => {
  const oldLog = console.log
  beforeEach(() => {
    console.log = jest.fn()
    console.log.mockReset()
  })
  it('should call console.log because is in `process.env.DEBUG=true`', () => {
    process.env.DEBUG = true
    const next = jest.fn()
    debugMiddleware(console.log)({ body: 'body', originalUrl: '/walou' }, '', next)
    // eslint-disable-next-line no-useless-escape
    expect(console.log).toHaveBeenCalledWith('/walou : ', JSON.stringify('body'))
    expect(next).toHaveBeenCalled()
  })
  it('should not call console.log because `process.env.DEBUG=false`', () => {
    const next = jest.fn()
    process.env.DEBUG = false
    debugMiddleware(console.log)({ body: 'body', originalUrl: '/walou' }, '', next)
    // eslint-disable-next-line no-useless-escape
    expect(console.log).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
  })
  afterAll(() => {
    console.log = oldLog
  })
})
