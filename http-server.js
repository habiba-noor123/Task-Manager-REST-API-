
const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.url === "/" && req.method === "GET") {
        res.end(JSON.stringify({
            message: "Welcome to Task Manager API"
        }));
    }

    else if (req.url === "/tasks" && req.method === "GET") {
        res.end(JSON.stringify({
            tasks: ["Learn Node.js", "Practice Express"]
        }));
    }

    else if (req.url === "/about" && req.method === "GET") {
        res.end(JSON.stringify({
            message: "This is a Task Manager Server"
        }));
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("HTTP Server running on port 3000");
});
