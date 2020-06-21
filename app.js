var express = require("express");
var app = express();

// "/" => "Hi"
app.get("/", function(req, res){
	res.send("Hi There!");	
})
// "/goodbye => "goodbye!"
app.get("/bye", function(req, res){
	res.send("Good bye! :(")
});
// "/dog" => "MEOW";
app.get("/dog", function(req, res){
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit + " Subreddit");	
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	res.send("Welcome to the comment of Subreddit");
});

app.get("*", function(req, res){
	res.send("you are a star!");
})

app.listen(3000, function(){
	console.log("server has started!!!");
});