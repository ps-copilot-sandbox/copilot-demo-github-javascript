#!/usr/bin/env node

/**
 * @description This is a simple calculator that takes in two numbers and an operator
 * and returns the result of the calculation. 
 * This program also runs as a standalone application (eg.: calculator)
 * Usage:
 * node calculator.js 1 + 2
 * node calculator.js 1 - 2
 * node calculator.js 1 * 2
 * node calculator.js 1 / 2
 * 
 * Note: The * and ^ operators need to be escaped with a backslash, 
 * to prevent the shell from interpreting them.
 * Example: node calculator.js 1 \* 2
 * 
 */
const calculator = require('./calculator');

// capture all input arguments from the commandline
const input = process.argv.slice(2);

// check if the input is valid (has 3 arguments)
if (process.argv.length <= 3) {
  console.error('Usage: <app> 1 + 2');
  process.exit(1);
}

// join the input as a string
const inputString = input.join(' ');

// console.log(inputString);

if(process.env.DEBUG) console.log(inputString);

// regular expression to extract the first number
let num1 = /^(\d+)/;

// regular expression to extract the operator
let operator = /(\^|%|\+|\-|\*|\/)/;

// regular expression to extract the second number
let num2 = /(\d+)$/;

// extrac the numbers and convert them to integers
num1 = parseInt(num1.exec(inputString)[0]);
num2 = parseInt(num2.exec(inputString)[0]);
operator = operator.exec(inputString)[0];

// check if the DEBUG environment variable is set
if (process.env.DEBUG) {
    // debug statements
    console.log(`Input: ${inputString}`);
    console.log(`Num1: ${num1}`);
    console.log(`Operator: ${operator}`);
    console.log(`Num2: ${num2}`);
  }

// calculate the result using the calculator module
const result = calculator(num1, num2, operator);

// log the result with the input from the commandline
console.log(result);