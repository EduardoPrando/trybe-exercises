const searchEmployee = require('./bonus_1.js')

describe('Test if searchEmployee', () => {
  test('is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  })
  test('return the right answer', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  })
  test('return a error when an incorrect id is passed', () => {
    expect(() => { searchEmployee('8579', 'firstName') }).toThrowError(new Error ('ID não identificada'));
  })

  test('return a error when an incorrect detail is passed', () => {
    expect(() => { searchEmployee('8579-6', 'xablau') }).toThrowError(new Error ('Informação indisponível'))
  })

  test('throw a error if no other parameter is passed', () => {
    expect(() => { searchEmployee() }).toThrow();
  })
});