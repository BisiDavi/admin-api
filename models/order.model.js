const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    pickupVendor: String,
    pickupContact: String,
    pickupDescription: String,
    deliveryDetails: [
        {
            deliveryAddress: String,
            phoneNumber: String,
        },
    ],
    note: String,
    status: {
        type: String,
        default: null,
    },
    assignedDispatcherID: {
        type: String,
        default: null,
    },
    numberOfDeliveries: String,
    admin: String,
});

module.exports = mongoose.model('Orders', OrdersSchema);
