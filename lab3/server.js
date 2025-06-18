const connect = require('connect');
const url = require('url');

const app = connect();

/**
 * Parses URL parameters and performs the requested math operation
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
function calculate(req, res) {
  // parse the URL
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  // extract operation and numbers
  let operation = query.method;
  const num1 = parseFloat(query.x);
  const num2 = parseFloat(query.y);

  let result;
  let error = null;

  // perform the requested operation
  switch(operation) {
    case 'add':
      operation = '+';
      result = num1 + num2;
      break;
    case 'subtract':
      operation = '-';
      result = num1 - num2;
      break;
    case 'multiply':
      operation = '*';
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        error = 'Cannot divide by zero';
      } else {
        operation = '/';
        result = num1 / num2;
      }
      break;
    default:
      error = 'Invalid operation. Use add, subtract, multiply, or divide';
  }

  // send response
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  let output = `${num1} ${operation} ${num2} = ${result}`;

  if (error) {
    res.end(JSON.stringify({ error }));
  } else {
    res.end(JSON.stringify({ output }));
  }
}

// register the calculate middleware
app.use(calculate);

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});