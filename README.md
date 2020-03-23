# nangning-logger-js
This is sample logger with winston module.

## Installation
```
npm install nangning-logger-js
```

## Usage
```javascript
const logger = require("nangning-logger-js");

// Sample loggerRequest
logger.loggerRequest.info({ 
    method: req.method,
    endpoint: req.originalUrl,
    label: 'API Example',
    message: req.body
})

// Sample loggerResponse
logger.loggerResponse.info({ 
    method: req.method,
    endpoint: req.originalUrl,
    label: 'API Example',
    message: req.body
})
```

For the full reference check the [Winston GitHub repository](https://github.com/winstonjs/winston).
