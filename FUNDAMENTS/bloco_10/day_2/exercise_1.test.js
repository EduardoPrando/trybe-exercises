const uppercase = require('./exercise_1.js')

describe('Test uppercase', () => {
  test('is a function', () => {
    expect(typeof uppercase).toBe('function')
  })
  test('is working with one word ', (done) => {
    uppercase('xablau', (callback) => {
      expect(callback).toBe('XABLAU')
      done();
    })
  })
  test('is working whit a longer sentence', (done) => {
    uppercase('test a longer sentence', (callback) => {
      expect(callback).toBe('TEST A LONGER SENTENCE')
      done();
    })
  })
})
