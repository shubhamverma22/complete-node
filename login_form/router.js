var express = require("express");
var router = express.Router();

const credentials = {
	email: "lpushubham@gmail.com",
	password: "admin",
};

//login user
router.post("/login", (req, res) => {
	const { email, password } = credentials;		//destructuring
	if (req.body.email == email && req.body.password == password) {
		req.session.user = req.body.email;
		res.redirect("/route/dashboard");
		//res.end("Login Successfully");
	} else {
		res.end("Invalid Credentials");
	}
});

//route for dashboard
router.get("/dashboard", (req, res) => {
	if (req.session.user) {
		res.render("dashboard", { title: "Dashboard", user: req.session.user });
	} else {
		res.send("Unauthorized User");
	}
});

//route for logout
router.get("/logout", (req, res) => {
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
			res.send("Error");
		} else {
			res.render("base", { title: "Express", logout: "logout Successfully..!" });
		}
	});
});

module.exports = router;
