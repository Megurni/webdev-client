const MathFunctions = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
};
export const add = MathFunctions.add;
export const subtract = MathFunctions.subtract;
export const multiply = MathFunctions.multiply;
export const divide = (a: number, b: number) => a / b;
export const remainder = (a: number, b: number) => a % b;
export default MathFunctions;
