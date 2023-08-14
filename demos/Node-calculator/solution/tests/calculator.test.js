const calculator = require('../calculator');

describe('calculator', () => {
  it('should add two numbers', () => {
    expect(calculator(2, 3, '+')).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator(5, 3, '-')).toBe(2);
  });

  it('should multiply two numbers', () => {
    expect(calculator(2, 3, '*')).toBe(6);
  });
    
  it('should multiply two numbers', () => {
    expect(calculator(10, 3, '%')).toBe(1);
  });
    
  it('should multiply two numbers', () => {
    expect(calculator(2, 3, '**')).toBe(8);
  });
    
  it('should divide two numbers', () => {
    expect(calculator(6, 3, '/')).toBe(2);
  });

  it('should throw an error for an invalid operator', () => {
    expect(() => calculator(2, 3, '#')).toThrow('Invalid operator');
  });

  it('should throw an error for division by zero', () => {
    expect(() => calculator(2, 0, '/')).toThrow('Division by zero');
  });
});