var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello unnivesrse! dsdd'); //write a response to the client
  res.end(); //end the response
}).listen(5005);
console.log('Nde.js webb sfdexrjdfhjver at port 5005 is running..')


