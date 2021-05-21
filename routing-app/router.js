const express = require("express");
const route = express.Router();
var accounts = require("./database");

//GET request
route.get("/accounts", (req, res) => {
	//console.log(accounts);
	res.json({ userData: accounts });
});

route.post("/accounts", (req, res) => {
	const incomingAccount = req.body;
	accounts.push(incomingAccount);
	res.json(accounts);
});

//get a data of particular user inside the file
route.delete("/accounts/:id", (req, res) => {
	const accontid = Number(req.params.id);
	const getAccount = accounts.find((accnt) => accnt.id === accontid);
	if (!getAccount) {
		res.status(500).send("Account Not Found");
	} else {
		res.json({ userData: [getAccount] });
	}
});

//put http method
route.put("/accounts/:id", (req, res) => {
	const accntID = Number(req.params.id);
	const account = accounts.find((accnt) => accnt.id === accntID);
	const body = req.body;
	const index = accounts.indexOf(account);
	if (!account) {
		res.status(500).send("Account Not Found");
	} else {
		const updatedAccount = { ...account, ...body };
		accounts[index] = updatedAccount;
		console.log(accounts);
		res.send(updatedAccount);
	}
});

//delete request
route.delete("/accounts", (req, res) => {
	const accntID = req.params.id;
	const newAccounts = accounts.filter((accnt) => accnt.id != accntID);
	if (!newAccounts) {
		res.status(500).send("Account Not Found");
	} else {
		accounts = newAccounts;
		res.send(accounts);
	}
});

module.exports = route;
