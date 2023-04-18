//? Routing

const http = require("node:http");

const server = http.createServer((req, res) => {
  // req.method GET POST PUT DELETE 
  // req.url
  // combination of both allows us to handle any type of routing
  // generally we use frameworks for routing as code is redundant
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Aakash",
        lastName: "Saini",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
