var express = require("express");
var morgan = require("morgan");
var ejs = require("ejs");
var path = require("path");

var home = require("./homepage")
var id = require("./idpage")

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');



app.use(morgan("short"));

app.get("/", home);

app.get("/:id", id );

app.use( function (req , res ){
    res.status("404");
    res.end("404");
    
});



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err){
    
    if (err) throw err;
    console.log("Serwer start");
    
});
    
    
