const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RentItemSchema = new Schema({
    name: {type: String, unique: true,required: true, max: 12},
    rent_price: {type: Number, required: true},
    created_date:{type:Date,default:new Date()}
});

module.exports = mongoose.model('rentItems', RentItemSchema);
