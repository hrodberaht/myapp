var id = function (req , res ){
    var hi = req.params.id;
    if (hi === "h") res.end(hi);
    else res.end("some");
};

module.exports = id;