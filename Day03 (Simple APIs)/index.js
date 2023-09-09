require('dotenv').config();
const http = require('http');
const data = require('./data')

http.createServer((req,res) => {
    res.writeHead(201, {'Content-Type':'application/json'})
    res.write(JSON.stringify(data));
    res.end();

}).listen(process.env.PORT || 3000);

