var http = require('http');

const PORT = process.env.PORT || 1337;

function handleRequest(request, response){
        response.end('This is the proof of existence of my first Node.js based Web Server.\n' +
            'The requested path on this server was: "' + request.url + '"');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log('Node Web Server listening on http://localhost:%s', PORT);
});