var http = require('http');

var fs = require('fs');


var server = http.createServer(function (req, res) {
 

    //***********************************************************************

    //if i want to reach different page, i can write if request to read the urls.

    if (req.url == '/') {
        fs.readFile('index.html', function (err, data) {
            res.write(data);

            res.end('Home Message is finished!!');
        });
    }

    if (req.url == '/login') {
        fs.readFile('login.html', function (err, data) {
            res.write(data);

            res.end('Login Message is finished!!');
        });
    }

    // to show on the screen just write console.log
    console.log(req.url);

    //***********************************************************************

});
server.listen(8000);
