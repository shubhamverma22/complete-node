const express = require("express");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = 8080;

//creating a id-token using morgan
morgan.token("id", function getID(req) {
	return req.id;
});

//creating a own simple or custom token in morgan
morgan.token("param", function (req, res, param) {
	return "userToken";
});

//to use assignId function in the app
app.use(assignId);

//create File Stream to store user information
let accessStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
	flags: "a",
});

//generate random id on reload
app.use(morgan(":id :param :method :url :status 'HTTP/:http-version'")); // O/P:- fa1ff466-ddfc-4ff8-9f85-9cc0d85ae3c4 userToken GET / 200 'HTTP/1.1'
app.use(
	morgan(":id :param :method :url :status 'HTTP/:http-version'", {
		stream: accessStream,
	})
);
app.get("/", (req, res) => {
	res.end("Morgan Logger App");
});

//assign id using uuid
function assignId(req, res, next) {
	req.id = uuidv4();
	next();
}

app.listen(PORT, () => console.log("Server is Running at Port 8080"));
