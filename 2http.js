var http = require('http');

// Other way to define listen port:

const hostname = '127.0.0.1'; // 127.0.0.1 : localhost
const port = 8000;


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader ('Content-Type','text/plain');
    res.end('OK now. I am working!');    
});


server.listen(port, hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
