const express = require("express");

const server = express();

const PORT = 5000;

server.get('/', (req, res) => {
    res.json({ Hello: "world!"});
});

server.get('/hello', (req, res) => {
    res.json({ hello: "sexy"});
});

server.listen(PORT, () => {
    console.log(`*** Server running on port ${PORT} ***`)
});

