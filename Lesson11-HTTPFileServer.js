var fs = require('fs');
var http = require('http');
var fpath = process.argv[2];

var server = http.createServer(function (req, res) {
/*    req.on('data', function(data) {
        console.log(data);
    });
*/
    fs.createReadStream(fpath).pipe(res);
});
server.listen(8000);

