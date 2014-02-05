var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var description = req.query.description;
	var imgURL = "http://lorempixel.com/400/400/people";
	data.friends.unshift({name : name, description : description, imageURL : imgURL});
	res.render("add", data);
	// Your code goes here
 }