//TODO:                                             Promises
/*let promise = new Promise(function (res, rej) {
	setTimeout(() => res("Run Before"), 1000);
});

promise.then(
	(result) => {
		console.log(result);
		getMessage(); //Now both runs at same time
	},
	(err) => console.log(err)
);

function getMessage() {
	console.log("GET Message");
}

//It exectes 1st and after 1 sec promise executes
//getMessage();
*/

//TODO:                                             HTTP Server
/*const http = require("http");
const hostname = `127.0.0.1`;
const PORT = 3000;

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	// res.statusCode = 200;
	// res.setHeader("Content-Type", "text/plain");
	res.write("Hello Everyone ");
	res.end("Welcome to HTTP server"); //end method returns the data to the request. and it ends the response process
});

server.listen(PORT, hostname, () => {
	console.log(`Server Running at http://${hostname}:${PORT}/`);
});
*/

//TODO:                                       Making HTTP Request

const http = require("https");

//                                                    GET Request
/*http.get("http://api.open-notify.org/astro.json", (resp) => {
	let data = "";
	resp.on("data", (chunk) => {
		data += chunk;
	});

	resp.on("end", () => {
		let jsondata = JSON.parse(data);
		console.log(jsondata);
	});
});
*/

//                                          POST Request using axios

/* const axios = require("axios");
const data = JSON.stringify({
	name: "Shubham",
	age: 56,
});

axios
	.post("https://reqres.in/api/users", data)
	.then((res) => {
		console.log(`Status Code is: ${res.status}`);
		console.log(`Body: ${JSON.stringify(res.data)}`);
	})
	.catch((err) => {
		console.log(err);
	});
*/

//TODO:                                       File System

//  Working with Files in NodeJS

/* const fs = require("fs");

//async version of fs module
fs.readFile("test.txt", "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
});

//Synchronous fs module
const data = fs.readFileSync("test.txt", { encoding: "utf-8", flag: "r" });
console.log(data);

//To check the status of file
fs.stat("test.txt", (err, stats) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(stats.isFile()); //It returns true bcoz it's a file
	console.log(stats.isDirectory()); //It returns false coz it's not a directory
	console.log(stats.isSymbolicLink()); //It also returns false
	console.log(stas.size); //returns the size of file
});

*/
//                                  Working on Writing and Updating

/*
fs.writeFile();
fs.readFile();
fs.unlink();    //To delete the file
or;
fs.writeFileSync();
fs.readFileSync();
fs.unlinkSync();
*/

/* const fs = require("fs");

//contents to write in file
const content = [
	{
		type: "Node Application",
	},
];

const contant = "Hey there Everyone!!";

//sync method
fs.writeFileSync("test.txt", JSON.stringify(content));

//async method
fs.writeFile("test.txt", contant, { flag: "a+" }, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Successfully Done");
});

//Delete a file
fs.unlink("tds.txt", (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("File Removed");
});
*/

//TODO:                                           Routing

//                                           Basic level Routing

/* const https = require("http");

function index(request, response) {
	response.writeHead(200);
	response.end("Node Routing");
}
function about(req, res) {
	res.writeHead(200);
	res.end("About us Page");
}

https
	.createServer((req, res) => {
		if (req.url == "/") {
			return index(req, res);
		}
		if (req.url == "/about") {
			return about(req, res);
		}
	})
	.listen(8000);
*/

//                                          Intermediate level Routing
/*const https = require("http");

const routes = {
	"/": function index(request, response) {
		response.writeHead(200);
		response.end("Home Page");
	},
	"/about": function index(request, response) {
		response.writeHead(200);
		response.end("About us Page");
	},
};
https
	.createServer((req, res) => {
		if (req.url in routes) {
			return routes[req.url](req, res);
		}
	})
	.listen(process.env.PORT || 8000);
*/

//TODO:                                      Path Module

/*const path = require("path");
file = path.basename("test.txt"); // returns the last portion of the file
dir = path.dirname("Tutorial/test.txt"); //returns the directory pf the file
abs = path.isAbsolute("Tutorial/test.txt"); //returns false coz it's not correct path of file
let pathdir = "Tutorial";
joinpath = path.join("C:", "USer/Shubham/Desktop/", pathdir, "test.json"); //to join the directories
parsePath = path.parse("Node_Training/test.txt"); //It returns all the information of the path as an object like: {   root: '',   dir: 'Node_Training',   base: 'test.txt',   ext: '.txt',   name: 'test' }
resovePath = path.resolve("Node_Training/test.txt"); //It return the absolute path of the file like: /Users/shubhamverma/Desktop/Node_Training/Node_Training/test.txt

console.log(file);
console.log(dir);
console.log(parsePath);
console.log(resovePath);
*/
//TODO:                                     Event Module

/* const events = require("events");
 let ev = new events.EventEmitter();

/*ev.on("my_event", function (data) {
	console.log("Event :", data);
});

ev.emit("my_event", "Call emit() method to fire my_event"); // O/P:- Event : Call emit() method to fire my_event


ev.once("eventOnce", (code, mssg) => console.log(`Got ${code} and ${mssg}`));

//To fire the event or call the event
ev.emit("eventOnce", 200, "ok");


//To unregister the event
ev.off('eventOnce', )
*/

//TODO:                                       Streams
/*const https = require("http");
const fs = require("fs");

const server = https.createServer(function (req, res) {
	fs.readFile("test.txt", (err, data) => {
		res.end(data);
	});
});

server.listen(3000, () => {
	console.log("Application started at PORT 3000");
});
*/

// The above method makes slow down the exection of App So Node introduce Streams

/*const https = require("http");
const fs = require("fs");

const server = https.createServer(function (req, res) {
	const stream = fs.createReadStream("test.txt");
	stream.pipe(res);
});

server.listen(3000, () => {
	console.log("Application started at PORT 3000");
});
*/

//TODO:                                     Buffer

/*const buf = Buffer.from("Hey");
console.log(buf); //  O/P   <Buffer 48 65 79> these numbers represents the string
console.log(buf[0]); //O/P  72 is a unicode character which reprents the first character H --> 72
console.log(buf.toString());    //O/P---> Hey 
*/

//TODO:                                       Exception Handling

//                                                  1st way
//throw new Error("error message"); // throw error message

//                                                2nd way
/*try {
	console.log("deal with problems");
	lalala;
	console.log("after error exection");
} catch (error) {
	console.log("Error is here", error);
}
*/

//                                          3rd way(using promises)
/*doSomething1()
	.then(doSomething2)
	.then(doSomething3)
	.catch((err) => console.log(err));
*/

//                                          4th way(using async await)
/*
async function someFunction() {
	try {
		await someOtherFunction();
	} catch (err) {
		console.error(err.message);
	}
}
*/

//TODO:                                       Express

