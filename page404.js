var page404 = function (req , res ){
    res.status("404");
    res.render("page404");
    
};

module.exports = page404;