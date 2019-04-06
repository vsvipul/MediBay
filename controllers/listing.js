var medicine = require('../models/medicine');
const fs = require('fs');

exports.addListing = function(req, res){
    var med = new medicine({
        username: req.user.username,
        name: req.body.name,
        description: req.body.description,
        expiry: req.body.expiry,
        brand: req.body.brand,
        mrp: req.body.mrp,
        sp: req.body.sp,
        use: req.body.use,
        quantity: req.body.quantity,
        image: String,
        prescription: String
    });
};
