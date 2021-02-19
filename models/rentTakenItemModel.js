const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RentItemTakenSchema = new Schema({
    person_name: {type: String, required: true, max: 12},
    rentItemId: {type:String, required: true,}
});

module.exports = mongoose.model('rentItemTakens', RentItemTakenSchema);
