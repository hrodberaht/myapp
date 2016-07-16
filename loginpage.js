var loginpage = function (req , res ){
    var hi = req.body.name;
    var pass = req.body.pass;
    if (pass == "123"){
       
        res.render("loginpage", {
        name: hi
        });
        
    }
    else {
       
        res.redirect("/");

    }    
    };

module.exports = loginpage;