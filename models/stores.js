const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoresSchema = new Schema({
    vendorName: String,
    address: String,
    phoneNumber: String,
});

module.exports = mongoose.model('Stores', StoresSchema);
