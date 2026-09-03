import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === '/Product') {
        res.end("<h1> Product page</h1>");
    } else if (req.url === '/cart') {
        res.end("<h1> Cart Page</h1>");
    } else if(req.url === '/checkout') {
        res.end(`<h1>checkout page</h1>`);
    } else res.end("<h1> Page not found</h1>");
});
server.listen(4000, () => {
    console.log("Server is running")
});
