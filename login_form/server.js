const express = require("express");
const path = require("path"); //helps to provide path for static files
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const app = express();
const router = require("./router");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//load static assets
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use(
	session({
		secret: uuidv4(),
		resave: false,
		saveUninitialized: true,
	})
);

//This middleware add all router inside the server
app.use("/route", router);

//home Route
app.get("/", (req, res) => {
	res.render("base", { title: "Login System" });
});

app.listen(PORT, () => console.log(`Server is Running at PORT: ${PORT}`));
