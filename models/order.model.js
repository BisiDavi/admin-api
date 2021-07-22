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
        enum: ['PENDING', 'ACTIVE', 'DELIVERED'],
        default: 'PENDING',
    },
    assignedDispatcherID: {
        type: String,
        default: null,
    },
    numberOfDeliveries: String,
    admin: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

module.exports = mongoose.model('Orders', OrdersSchema);
