import http from 'http';

const server = http.createServer(async (req, res) => {
    const text = await readFile('big.txt');
    res.end(text);


});

server.listen(5000, () => {
    console.log("Server is running")
});
