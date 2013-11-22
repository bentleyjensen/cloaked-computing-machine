var fs = require('fs');
var newLines = 0;
/*var readStream = fs.createReadStream(process.argv[2]);

 	readStream.on(data, function (newLines) {
	if (stream == "/n") { newLines++}
	}
	readStream.on(close, function(){
	console.log(newLines);
}  */

  fs.readFile(process.argv[2], "utf8", function (err, data) {
		//console.log(data); // Entire file
		if (err) {
			throw err;
		}	
		else {
		//var data = toString(process.argv[2]);
		var i = 0;
		for (i=0; i < data.length; i++) {

			if (data[i] == "\n") {
				newLines++;
			}

		} 
		console.log(newLines);

	}
	}
);  

