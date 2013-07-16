var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buffer = fs.readFileSync("index.html")
  theString = buffer.toString();  
  response.send(theStrings);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
