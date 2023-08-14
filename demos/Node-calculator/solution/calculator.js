/**
 * @desciption: A claculator module that can add, subtract, multiply, modulo, 
 *              exponent and divide by taking in two numbers and an operator.
 *              It throws an error if the operator is invalid or if the second
 *              number is zero and the operator is division.  
 *  
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * 
 * @returns {number} result of the operation
 */

// the calculator function
const calculator = (num1, num2, operator) => {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '%') {
        return num1 % num2;
    } else if (operator === '^') {
        return num1 ** num2;
    } else if (operator === '/' && num2 !== 0) {
        return num1 / num2;
    } else if (num2 === 0 && operator === '/'){
        throw new Error('Division by zero');
    } else {
        throw new Error('Invalid operator');
    }
}

// export the calculator function
module.exports = calculator;