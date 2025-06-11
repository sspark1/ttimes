import { describe, it, expect } from 'vitest';
import { Expression } from '../Expression/Expression';

describe('Expression', () => {
  it('should create an expression with a valid string', () => {
    const expr = new Expression('2+2');
    expect(expr.getValue()).toBe('2+2');
  });

  it('should throw an error when created with an empty string', () => {
    expect(() => new Expression('')).toThrow('Expression cannot be empty');
  });

  it('should validate basic arithmetic expressions', () => {
    expect(new Expression('2+2').isValid()).toBe(true);
    expect(new Expression('2*3').isValid()).toBe(true);
    expect(new Expression('10-5').isValid()).toBe(true);
    expect(new Expression('8/4').isValid()).toBe(true);
  });

  it('should validate expressions with parentheses', () => {
    expect(new Expression('(2+2)*3').isValid()).toBe(true);
    expect(new Expression('2*(3+4)').isValid()).toBe(true);
    expect(new Expression('(2+3)*(4-1)').isValid()).toBe(true);
  });

  it('should invalidate expressions with unbalanced parentheses', () => {
    expect(new Expression('(2+2').isValid()).toBe(false);
    expect(new Expression('2+2)').isValid()).toBe(false);
    expect(new Expression('(2+2))').isValid()).toBe(false);
  });

  it('should validate expressions with scientific functions', () => {
    expect(new Expression('sin(30)').isValid()).toBe(true);
    expect(new Expression('cos(45)').isValid()).toBe(true);
    expect(new Expression('tan(60)').isValid()).toBe(true);
    expect(new Expression('log(100)').isValid()).toBe(true);
    expect(new Expression('sqrt(16)').isValid()).toBe(true);
  });

  it('should validate complex expressions', () => {
    expect(new Expression('2+3*4').isValid()).toBe(true);
    expect(new Expression('sin(30)+cos(60)').isValid()).toBe(true);
    expect(new Expression('(2+3)*(sin(45)+1)').isValid()).toBe(true);
    expect(new Expression('sqrt(16)+log(100)/2').isValid()).toBe(true);
  });

  it('should invalidate expressions with invalid characters', () => {
    expect(new Expression('2+@').isValid()).toBe(false);
    expect(new Expression('hello').isValid()).toBe(false);
    expect(new Expression('2++2').isValid()).toBe(false);
  });
});
