///<reference path="typings/express/express.d.ts"/> 

var express1 = require("express");
var app = express1();
app.use(express1.static(__dirname + "/public"));


app.get('/customer', function (request, response) {


	response.end('{"name":"naved" , "id" : "12"}');

})

app.listen(1010, function () {
	console.log("server runnng port 1010");
});


