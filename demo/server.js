var http = require('http');

var server = http.createServer(function (request, response) {
	response.write('Hello, World!');

	response.end();
});

server.listen(8000);


