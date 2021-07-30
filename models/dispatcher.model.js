const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const DispatcherSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String,
        whatsappNumber: String,
        userName: String,
        password: String,
        fleetBrand: String,
        fleetModel: String,
        fleetColor: String,
        fleetPlateNumber: String,
        fleetOwner: String,
        location: {
            latitude: { type: String, default: null },
            longitude: { type: String, default: null },
        },
        role: { type: String, default: 'dispatcher' },
    },
    {
        timestamps: true,
    },
);

DispatcherSchema.pre('save', function (next) {
    const dispatcher = this;
    if (!dispatcher.isModified || !dispatcher.isNew) {
        next();
    } else {
        bcrypt.hash(dispatcher.password, 10, function (err, hash) {
            if (err) {
                console.log(
                    'Error hashing password for dispatcher',
                    dispatcher.firstName,
                );
                next(err);
            } else {
                dispatcher.password = hash;
                next();
            }
        });
    }
});

module.exports = mongoose.model('Dispatcher', DispatcherSchema);
