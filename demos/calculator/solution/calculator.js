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

function calculator(num1, num2, operator) {
    var result = 0;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '%') {
        result = num1 % num2;
    } else if (operator === '**') {
        result = num1 ** num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            throw new Error('Division by zero');
        }
        result = num1 / num2;
    } else {
        throw new Error('Invalid operator');
    }
    return result;
}

module.exports = calculator;