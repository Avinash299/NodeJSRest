const RentItem = require('../models/rentItemModel');
const RentItemTaken = require('../models/rentTakenItemModel');

exports.rentItemCreate = function (req, res) {
    let rentItem = new RentItem(
        {
            name: req.body.name,
            rent_price: req.body.rent_price,
        }
    );
    rentItem.save(function (err,result) {
        if (err){
            res.send({status:1, message:"Problem in create rent item",mongoerr:err});
         } else{
             res.send({status:0, message:"RentItem Created succesfully",data:result});
         }
    })
};

exports.updateRentItem = function (req, res) {
    RentItemTaken.find({rentItemId:req.params.id},function (err, item){
        if(err){
            res.send({status:1, message:"Problem in get rent item"});
        }else{
            if(item.length > 0){
                res.send({status:1, message:"Rent item already in use"});
             }else{
                RentItem.findByIdAndUpdate(req.params.id, {$set: req.body},
                    function (err, result) {
                        if (err){
                            res.send({status:1, message:"Problem in update rent item"});
                         } else{
                             res.send({status:0, message:"RentItem updated succesfully",data:result});
                         }
                    });
             }
        }
    });
   
};

exports.deleteRentItem = function (req, res) {
    RentItemTaken.findById({rentItemId:req.params.id},function (err, item){
          if(err){
            res.send({status:1, message:"Problem in delete rent item"});
          }else{
             if(item.length > 0){
                res.send({status:1, message:"Rent item alreay in use"});
             }else{
                RentItem.findByIdAndRemove(req.params.id, function (err) {
                    if (err){
                       res.send({status:1, message:"Problem in delete rent item"});
                    } else{
                        res.send({status:0, message:"Deleted RentItem succesfully"});
                    }
                })
             }
          }
    })
    
};