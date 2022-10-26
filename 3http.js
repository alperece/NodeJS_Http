var http = require('http');

var server = http.createServer(function(req,res){
    if (req.url == '/'){
        // writeHead: writes the HTTP header with sub methods like statusCode, setHeader
            res.writeHead(200, {'Content-Type': 'text/html'}); 

            // set response content: write a response content to the client
            res.write('<html><body><p> This is my HOME page! </p></body></html>');

            // end writes the body and closes the response!
            res.end();

    }
    else if (req.url == '/news'){
           // writeHead: writes the HTTP header with sub methods like statusCode, setHeader
           res.writeHead(200, {'Content-Type': 'text/html'}); 

           // set response content: write a response content to the client
           res.write('<html><body><p> This is my NEWS page! </p></body></html>');
   
           // end writes the body and closes the response!
           res.end();

    }
    else if ( req.url == '/movies/scary'){
            // writeHead: writes the HTTP header with sub methods like statusCode, setHeader
            res.writeHead(200, {'Content-Type': 'text/html'}); 

            // set response content: write a response content to the client
            res.write('<html><body><p> This is my MOVIES page! </p></body></html>');

            // end writes the body and closes the response!
            res.end();

    }

    else 
        res.end('Invalid Request!');
});

server.listen(5000);

console.log('my Node.js web server at port 5000 is running...!');

/* 
Example: you can define multiple times for res.write but only one time for res.end

response.write('<html>');
response.write('<body>');
response.write('<p> This is my HOME page! </p>');
response.write('</body>');
response.write('</html>')

response.end();

*/