const express = require("express");
const app = express();
const route = require("./router");

const port = 8080;

app.use(express.urlencoded({ extended: false }));
//We always provide a middleware to use the routes in app
app.use("/api", route);

//home route
app.get("/", (req, res) => {
	res.send("Home Route");
});

app.listen(port, () => console.log("Server is Running at port 8080"));
