# Copilot Calculator Demo

The workshop uses **Copilot** & **Copilot Chat** features to complete the solution.

<br><br>

![cc](images/copilot-and-chat.png)

<br><br>

Pre-Requisits

- initialize the npm project (create package.json)
- create an `index.js` file
- create a `calculator.js` file 

```
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

## 3. Test the solution

### 4. Run the program
```node
node index.js
```
or
```node
node index.js 2 + 3
```

### 4.1 Fix any errors that come up

Type any error in to Copilot-Chat and ask for a fix.

<img width="48px" src="images/copilot-chat.png">

```
...
```
---

## Create unit tests

### 5. Open the `test/calculator.test.js` file

### 5.1 Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

```
give me a sample unit test for the calculator module.
```

### 5.2 Copy the suggested code to the file

### 5.3 Ask Copilot Chat for help

<img width="48px" src="images/copilot-chat.png">

```
how can I invoke the unit test ?
```


<img width="48px" src="images/copilot-chat.png">

```
how can I create jest json output ?
```