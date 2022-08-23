var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('he ha hu time aa gaya!'); //write a response to the client
  res.end(); //end the response
}).listen(5005);
console.log('Nde.js wdebb sfdexrjdfhjxvedondddexr att port 5005 is running..')


