var http = require("http");
var url = require("url");
var d = new Date();
var query = require('querystring');
var json;

var server = http.createServer(function (req,res) {

  var ISO = url.parse(req.url);
  var query = ISO.query;
  if (ISO.query == null || ISO.query.length<1){ 
    res.end();
    return;
  }
  var plbth = new Date(query.replace("iso=",""));

  res.writeHead(200, { 'Content-Type': 'application/json' });


  if (req.url.indexOf("parsetime")!=-1){
    json = {
      "hour" : plbth.getHours(),
      "minute" : plbth.getMinutes(),
      "second" : plbth.getSeconds()
    }
  res.end(JSON.stringify(json));
 }
  if (req.url.indexOf("unixtime")!=-1){
    json = {
      "unixtime" : plbth.getTime()
    }
    res.end(JSON.stringify(json));
  }

});

server.listen(8000);

