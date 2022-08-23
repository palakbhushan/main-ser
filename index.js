var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('he ha hu time aa'); //write a response to the client
  res.end(); //end the response
}).listen(5005);
console.log('Nde.js wdebb sfdexrjdfhjvedoner att port 5005 is running..')


