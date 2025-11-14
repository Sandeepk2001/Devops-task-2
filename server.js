const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the sample Node.js App!\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});