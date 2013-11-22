var fs = require ('fs');
buf = new Buffer(fs.readFileSync(process.argv[2]));
var str = buf.toString();
var newLines = 0;
for (var i = 0; i < str.length; i++){
	//if (str[i] === "\n") {
	if ("\n" === str[i]) {
		newLines++
	}
}
console.log(newLines);


