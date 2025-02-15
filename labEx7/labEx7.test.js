// ----- Lab Exercise 7: Unite Test (Jest testing) -----
const { sum, sub, div, mul, addname } = require('./labEx7.js');

//describe() is a Jest function that groups related tests together. 
describe('Math Functions', () => {

  // Tests for sum function
  describe('sum', () => {
    test('adds positive numbers correctly: 2 + 3 = 5', () => {
      expect(sum(2, 3)).toBe(5);
    });

    test('adds negative numbers correctly: -2 + -3 = -5', () => {
      expect(sum(-2, -3)).toBe(-5);
    });

    test('adds zero correctly: 0 + 5 = 5', () => {
      expect(sum(0, 5)).toBe(5);
    });
  });

  // Tests for sub function
  describe('sub', () => {
    test('subtracts numbers correctly: 5 - 3 = 2', () => {
      expect(sub(5, 3)).toBe(2);
    });

    test('subtracts negative numbers correctly: -5 - 3 = -8', () => {
      expect(sub(-5, 3)).toBe(-8);
    });

    test('subtracts with zero correctly: 5 - 0 = 5', () => {
      expect(sub(5, 0)).toBe(5);
    });
  });

  // Tests for div function
  describe('div', () => {
    test('divides numbers correctly: 6 / 2 = 3', () => {
      expect(div(6, 2)).toBe(3);
    });

    test('divides negative numbers correctly: -6 / 2 = -3', () => {
      expect(div(-6, 2)).toBe(-3);
    });

    test('throws error when dividing by zero: 6 / 0', () => {
      expect(() => div(6, 0)).toThrow('Cannot divide by zero');
    });
    });
});