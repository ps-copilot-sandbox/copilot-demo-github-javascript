# A possible solution to the `calculator` demo

## Steps to test this solution

Run 

```
npm install
```

```
npm start 2 + 4
```

### or

Create an executable 

add this to `packages.json`

```
  "bin": {
    "calculator": "./index.js"
  }
```

add this line to the top of the `index.js`

```
#!/usr/bin/env node
```


```
npm install -g calculator
```

Run

```
calculator 3 + 4
```
