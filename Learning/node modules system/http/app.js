const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api") {
    res.write(
      JSON.stringify([
        1, 2, 3, 4, 5, 6, 6, 7, 6, 5, 4, 3, 2, 2, 4, 5, 3, 5, 43, 5, 3, 5, 34,
        5, 4, 5, 4,
      ])
    );
    res.end();
  }
});
// server.on("connection", (socket) => {
//   console.log("New Connection");
// });
server.listen(8000);

console.log("listen on port 8000");
