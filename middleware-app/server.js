const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8080;

// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "/static/app.json"));
// });
//Middlewares
app.use(function (req, res, next) {
	console.log("Request Date:", new Date());
	//res.sendFile("./static/cool.txt");
	next();
});

app.use(function (req, res, next) {
	//var file = path.join(__dirname);      //This return the project directory name
	var filepath = path.join(__dirname, "static", req.url);
	fs.stat(filepath, function (err, fileInfo) {
		if (err) {
			next();
			return;
		}
		if (fileInfo.isFile()) {
			res.sendFile(filepath);
		} else {
			next();
		}
	});
});

app.use(function (req, res) {
	res.status(404);
	res.send("File Not Found");
});

app.listen(PORT, () => console.log(`Listening on the PORT: ${PORT}`));
