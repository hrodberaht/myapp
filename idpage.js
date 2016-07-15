var id = function (req , res ){
    var hi = req.body.name;
    var pass = req.body.pass;
    if (pass == "123"){
       
        res.render("idpage", {
        name: hi
        });
        
    }
    else {
       
        res.redirect("/");

    }    
    };

module.exports = id;