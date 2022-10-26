
// We will create a server. Therefore, we need Http core module!

var http = require('http');

// req: incoming message
// res: server response
http.createServer(function(req, res){
    res.end('Hello HTTP Core Modules');
}).listen(8000);

console.log('Server is running...!');