const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storesSchema = new Schema(
    {
        vendorName: String,
        phoneNumber: String,
        email: String,
        whatsapp: String,
        ordersCreated: String,
    },
    {
        timestamps:true
    },
);

module.exports = mongoose.model('Stores', storesSchema);
