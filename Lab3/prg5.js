import http from 'http';

const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const products = {
        name: "mobile",
        price: 10000,
        discount: 10
    };
    res.end(JSON.stringify(products));
    });
server.listen(4000, () => {
    console.log("Server is running")
}); 
