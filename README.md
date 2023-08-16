# luxon-breaking-minor

This is a test repo to test the breaking changes in luxon.

## Usage

```bash
npm install && npm start
```

## Output

This should output a chunk of nodevu's data that can safely be ignored, and an error with a stack trace that seems to appear between luxon@3.3.0 and luxon@3.4.0.

```bash
/Users/cyren/GitHub/bnb/luxon-breaking-minor/node_modules/luxon/build/node/luxon.js:2868
    let sum = (_this$values$millisec = this.values.milliseconds) != null ? _this$values$millisec : 0;
                                                   ^

TypeError: Cannot read properties of undefined (reading 'milliseconds')
    at Duration.toMillis (/Users/cyren/GitHub/bnb/luxon-breaking-minor/node_modules/luxon/build/node/luxon.js:2868:52)
    at determineCurrentReleasePhase (/Users/cyren/GitHub/bnb/luxon-breaking-minor/node_modules/@nodevu/core/index.js:170:57)
    at /Users/cyren/GitHub/bnb/luxon-breaking-minor/node_modules/@nodevu/core/index.js:111:49
    at Array.map (<anonymous>)
    at core (/Users/cyren/GitHub/bnb/luxon-breaking-minor/node_modules/@nodevu/core/index.js:22:25)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async test (/Users/cyren/GitHub/bnb/luxon-breaking-minor/index.js:7:16)
```