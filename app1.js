const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("/HOME");
  }
});

server.listen(8080);
