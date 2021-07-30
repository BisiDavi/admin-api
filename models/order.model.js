const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema(
    {
        pickupVendor: String,
        pickupContact: String,
        pickupDescription: String,
        details: [
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
        phoneNumber: String,
        admin: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    {
        timestamps,
    },
);

module.exports = mongoose.model('Orders', OrdersSchema);
