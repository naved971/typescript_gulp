var express1 = require("express");
var app = express1();
app.use(express1.static(__dirname + "/public"));

app.listen(1010, function () {
	console.log("server runnng port 1010");
});
