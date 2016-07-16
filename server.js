var express = require("express");
var morgan = require("morgan");
var path = require("path");
var bodyParser = require('body-parser');

var home = require("./homepage");
var loginpage = require("./loginpage");
var page404 = require("./page404")

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("short"));


app.get("/", home);

app.post("/login", loginpage );

app.use(page404);



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err){
    
    if (err) throw err;
    console.log("Serwer start");
    
});
    
    
