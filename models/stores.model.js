const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storesSchema = new Schema({
    vendorName: String,
    address: String,
    phoneNumber: String,
});

module.exports = mongoose.model('Stores', storesSchema);
