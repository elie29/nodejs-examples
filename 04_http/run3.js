const http = require("http");

const server = http.createServer((req, res) => {

   res.statusMessage = "found";
   if (req.url === "/404") {
      res.statusCode = 404;
      res.statusMessage = "Not found";
   }
   res.end(res.statusMessage);
});

server.listen(3000);

server.on("error", (err, socket) => {
   socket.end(err);
});