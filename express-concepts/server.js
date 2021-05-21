const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
	res.send("pong");
});

const PORT = process.env.PORT || 5000;

//TODO:                                           Middlewares

/*
const myLogger = function (req, res, next) {
	console.log("Logged");
	next();
};

const requestTime = function (req, res, next) {
	req.reqTime = Date.now();
	next();
};

app.use(myLogger);
app.use(requestTime);

app.get("/", function (req, res) {
	res.send(`Current Time: ${req.reqTime}`);
});

*/
//TODO:                                       Serving Static Files in Express
/*
const path = require("path");

const publicPath = path.resolve(__dirname, "public"); //__dirname return you the current directory which youre working

app.use(express.static("public")); //This is a way to use the staic files in express. public is a folder name where we're gonna put all the static files
app.use(publicPath, express.static("static")); //To use the static files inside the static folder
//<img src="/img01.jpg"></img>  This is how we serve element in root route
//<img src="public/img01.jpg"></img>  This is how we serve element in /public route
*/

//TODO:                                           Routing in Express
/*
const data = {
	name: "Shubham",
	salary: 2300000,
	passion: "Snooker",
};

app.get("/", (req, res) => {
	res.end("Welcome to Home");
});

app.get("/about", (req, res) => {
	res.send("Welcome to About Us");
});

app.get("/weather", (req, res) => {
	res.json(data);
});

app.get("file", (req, res) => {
	res.sendFile("/public/index.html");
});

app.listen(3000, () => console.log("Server started at port 3000"));
*/

//TODO:																		Views
/*
app.set("view engine", "pug");
app
	.get("/pug", (req, res) => {
		res.render("index", {
			title: "Express View Engine",
			h1: "Express Application",
			p: "Express Template Engine",
		});
	})
	.listen(PORT, () => {
		console.log(`Server is started at port${PORT}`);
	});
*/

//TODO:																					Core Express

/*
//																					Built a login form
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//middleware: It helps to serialize the data in post request
app.use(
	express.urlencoded({
		extended: true,
	})
);

//GET
app
	.get("/pug", (req, res) => {
		res.render("index", {
			title: "Form Handling",
		});
	})
	.listen(PORT, () => {
		console.log(`Server is started at port${PORT}`);
	});

//POST
app.post("/form_submit", (req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	res.end(`Your Username is ${username} and Email is ${email}`);
});
*/

//TODO:																					Session
/*
const session = require("express-session");

app.use(
	session({
		secret: "Your Secret Key",
		resave: true,
		saveUninitialized: true,
	})
);

app.get("/", (req, res) => {
	req.session.name = "Shubham";
	return res.send("Session Set");
});

app.get("/session", (req, res) => {
	var name = req.session.name;
	console.log(req.session);
	return res.send(name);
});

//destroy session
app.get("/destroy", (req, res) => {
	req.session.destroy((err) => {
		console.log("Session destroyed");
	});
	res.end();
});

//NOTE: if i destroy the session than i'm not able to track user route like here i'm not able to get "/session" coz i destroy the session 

app.listen(PORT, () => console.log(`Listening to request at port${PORT}`));

*/

//TODO:																			Cookie
/*
const cookies = require("cookie-parser");

app.use(cookies());

const users = {
	name: "Shubham",
	Age: 24,
};

app.get("/", (req, res) => {
	res.send("Cookie Tutorial");
});

app.get("/setuser", (req, res) => {
	res.cookie("userData", users);
	res.send("User Data Added to Cookies");
});

app.get("/getuser", (req, res) => {
	res.send(req.cookies);
});

//destroy cokkie
app.get("/logout", (req, res) => {
	res.clearCookie("userData");
	res.send("User logout Successfully");
});

app.listen(PORT, () => console.log(`Listening to request at port${PORT}`));
*/