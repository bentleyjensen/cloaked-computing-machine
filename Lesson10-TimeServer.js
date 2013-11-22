var net = require('net');
var time = new Date();
var arr = [
      time.getFullYear()
    , time.getMonth()
    , time.getDate()
    , time.getHours()
    , time.getMinutes()
]

//Make month the right one because it starts at 0
arr[1]=arr[1]+1;

//zero-fill integers less than 10
for (i=0; i<arr.length;i++){
    if (arr[i]<10) {
        arr[i] = "0" + arr[i];
    }
}

//make a variable with the whole date in it
var d = arr[0]+'-'+arr[1]+'-'+arr[2] + " " + arr[3]+':'+arr[4] + "\n";

//initiate server that writes the date for every connection then ends the connection
var server = net.createServer(function (c) {
    c.write(d);
    c.end();
});

//listen to port 8000 with server above
server.listen(8000);
