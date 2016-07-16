


var homepage = function(req , res){
    var mess = "MyAPP v0.0.1";
    res.render("index", {
        message: mess
    });
};

module.exports = homepage;