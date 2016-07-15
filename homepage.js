


var homepage = function(req , res){
    
    res.render("index", {
        message: "hello"
    });
};

module.exports = homepage;