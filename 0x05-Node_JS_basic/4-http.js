const http = require('http');

const host = '127.0.0.1';
const port = 12345;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

app.listen(port, host, () => {});

module.exports = app;
