// we have access to http module that is build in node
const http = require('http');

const server = http.createServer((req, res) => {
 console.log('user hit the server')
 res.end('hello world')

})

server.listen(3000)