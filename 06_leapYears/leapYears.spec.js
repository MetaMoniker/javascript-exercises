const leapYears = require('./leapYears')

describe('leapYears', () => {
  test('1 works with non century years', () => {
    expect(leapYears(1996)).toBe(true);
  });
  test('2 works with non century years', () => {
    expect(leapYears(1997)).toBe(false);
  });
  test('3 works with ridiculously futuristic non century years', () => {
    expect(leapYears(34992)).toBe(true);
  });
  test('4 works with century years', () => {
    expect(leapYears(1900)).toBe(false);
  });
  test('5 works with century years', () => {
    expect(leapYears(1600)).toBe(true);
  });
  test('6 works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});
