/**
 * @description This is a simple calculator that takes in two numbers and an operator
 * and returns the result of the calculation.
 * Usage:
 * node index.js 1 + 2
 * node index.js 1 - 2
 * node index.js 1 * 2
 * node index.js 1 / 2
 * 
 * Note: The * and ^ operators need to be escaped with a backslash, to prevent the shell from interpreting them.
 * Example: node index.js 1 \* 2
 * 
 */
const { argv } = require('process');
const calculator = require('./calculator');

const args = argv.slice(2);

if (args.length !== 3) {
  console.error('Usage: node index.js <number> <operator> <number>');
  process.exit(1);
}

const [a, operator, b] = args;

const result = calculator(Number(a), Number(b), operator);

console.log(result);