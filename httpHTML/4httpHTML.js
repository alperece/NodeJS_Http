// 1st Core Module : HTTP:
var http = require('http');

// 2nd Core Module : FS
var fs = require('fs');

var server = http.createServer(function(req,res){

fs.readFile('index.html',function(err, data){
    // Server response:
    res.write(data);
    res.end('Server Message is finished here!!!')
    });

    
    
});

server.listen(8000);

console.log('my Node.js web server at port 5000 is running...!');