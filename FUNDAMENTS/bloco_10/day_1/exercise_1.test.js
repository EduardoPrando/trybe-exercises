const { decode, encode } = require('./exercise_1')

describe('Test if encode function is working', () => {
  test('if encode and decode are functions', () => {
    expect(typeof(encode)).toBe('function');
    expect(typeof(decode)).toBe('function');
  });
  test('if "a, e, i, o, u" vocal are converted to "1, 2, 3, 4 e 5"', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });
  test('if "1, 2, 3, 4 e 5" numbers are converted to "a, e, i, o, u"', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });
  test('all the other characters are not converted', () => {
    expect(encode('Testa a função techList')).toBe('T2st1 1 f5nçã4 t2chL3st');
    expect(encode('Até agora você viu muita teoria e documentação.')).toBe('Até 1g4r1 v4cê v35 m53t1 t24r31 2 d4c5m2nt1çã4.');
    expect(decode('T2st2s r2l1c34n1d4s d2ntr4 d2 5m1 f5nçã4')).toBe('Testes relacionados dentro de uma função');
    expect(decode('P1r1 s2p1r1r t2st2s d2 f5nçõ2s d3f2r2nt2s')).toBe('Para separar testes de funções diferentes');
  })
})

