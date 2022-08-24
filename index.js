var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('working fine!!!!!!!!!!!!!!!!!'); //write a response to the client
  res.end(); //end the response
}).listen(5005);
console.log('Running at port 5005 is running...')


