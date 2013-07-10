var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  output_buffer = fs.readFileSync("index.html");
  output_string = output_buffer.toString();  
  response.send(output_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
