var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hi there, Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sound = {
        dog : "Woof!",
        pig : "Oink!",
        cow : "Meow"
    };
   
    res.send("The " +req.params.animal +" says '" +sound[req.params.animal] +" " +sound[req.params.animal] +"'!");
});

app.get("/repeat/:word/:times", function(req, res){
    var msg="";
    for (var i = 0; i<req.params.times; i++){
        msg = msg + req.params.word + " ";
    }
    
    res.send(msg);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found..what are you doing with your life");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("excercise server started!!");
});

