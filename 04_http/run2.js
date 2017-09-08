const http = require("http");

const server = http.createServer((req, res) => {

   res.end(`Kikou ! Tu as fait ${req.method} sur ${req.url}`);
});

server.listen(3000);

server.on("error", (err, socket) => {
   socket.end(err);
});