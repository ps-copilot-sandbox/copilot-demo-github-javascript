# Copilot Calculator Demo

A small demo project to exercise the basic capabilities of Copilot in ***Visual Studio Code***. In this demo you should create a Node based calculator Module that you can access from the command-line via an `index.js` entry-point. We use copilot/chat to help us with the content creation of the `calculator.js`, `index,js` and some Node packaging settings. Enjoy !

>Note: The demo/workshop uses **Copilot** & **Copilot Chat** features to complete the solution.

## Pre-Requisits

- Make sure to have...

<img width="50%" src="images/copilot-and-chat.png">

...correctly installed in Visual Studio Code

----

- create a project folder (eg.: `myCalulator/`)
- initialize the npm project (create package.json)
- create an `index.js` file
- create a `calculator.js` file 

```
mkdir myCalculator
cd myCalculator
npm init
touch index.js
touch calculator.js
mkdir test
touch test/calculator.test.js
```

---

## 1. Write the `calculator.js` file

### 1.1 Open the `calculator.js` file and add this description.

```node
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
```

---

### 1.2 Open the Copilot code suggestion tab

<img width="48px" src="images/copilot.png"> 

![control](images/control-key.png)
![return](images/return-key.png)

Choose any of the suggested code samples and press `Accept Solution`, this will copy the code to the file.

---

### 1.3 Last step, have a look at the generated code.

---


## 2. Write the `index.js` file

### 2.1 Open the `index.js` file and add the description

```node
/**
 * @description This is a simple calculator that takes in two numbers and an operator
 * and returns the result of the calculation.
 * Usage:
 * node index2.js 1 + 2
 * node index2.js 1 - 2
 * node index2.js 1 * 2
 * node index2.js 1 / 2
 * 
 * Note: The * and ^ operators need to be escaped with a backslash, to prevent the shell from interpreting them.
 * Example: node index2.js 1 \* 2
 * 
 */
 ```

### 2.2 Ask Copilot Chat for help
<img width="48px" src="images/copilot-chat.png">

```
give me an example of an index file that reads the input from the commandline and uses the calculator module.
```

Copy the suggested solution into the `index.js` file.

---

## 3. Run the program

```node
node index.js
```
or
```node
node index.js 2 + 3
```

### 3.1 Fix any errors that come up

Type any error in to Copilot-Chat and ask for a fix.

<img width="48px" src="images/copilot-chat.png">

```
...
```

---

## 4. Test the solution

| This section is open to your imagination, try to "challange" the code

...

---

## 5. Create unit tests

### 5.1 Open the `test/calculator.test.js` file

### 5.2 Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

```
give me a sample unit test for the calculator module.
```

### 5.3 Copy the suggested code to the file

### 5.4 Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

```
how can I invoke the unit test ?
```


<img width="48px" src="images/copilot-chat.png">

```
how can I create jest json output ?
```

## "Extra Credit"

- Use the Unit test results to create a README [Badge](https://shields.io)
