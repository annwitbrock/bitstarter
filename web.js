var express = require('express');
var fs = require('fs');

var app =  express(express.logger());
//var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  output_buffer = fs.readFileSync("index.html");
  output_string = output_buffer.toString();  
  response.send(output_string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
