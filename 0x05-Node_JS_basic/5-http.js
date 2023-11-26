const http = require('http');
const { countStudents } = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 12345;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!\n');
    res.end();
  } else if (req.url === '/students') {
    try {
      const data = await countStudents('database.csv');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${data}`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Internal Server Error: ${error.message}\n`);
    }
  }
});

app.listen(port, host);

module.exports = app;
