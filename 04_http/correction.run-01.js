const http = require('http');

const server = http.createServer((req, res) => {
  res.end('coucou.js');
});

server.listen(3000);
