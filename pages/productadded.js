var productAdded = function (req , res){
    
    var name = req.body.productName;
    var price = req.body.price;
    
    var products = {};
    
    products.name = name;
    products.price = price;
    
    res.render("loginpage", {
        
        name : products.name
    });

    
};

module.exports = productAdded;