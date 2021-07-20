const getUserName = require ('./exercise_2')

describe('Test if getUserName', () => {
  test('is a function', () => {
    expect(typeof getUserName).toBe('function');
  })
  test('whit a success return the right answer', async () => {
    const userIdName = await getUserName(4)
    expect(userIdName).resolve.toEqual('Mark')
  })
})