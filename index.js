var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello universe!'); //write a response to the client
  res.end(); //end the response
}).listen(5005);

