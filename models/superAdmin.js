const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuperAdminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    whatsappNumber: String,
    userName: String,
    password: String,
    role: { type: String, default: 'admin' },
    isSuperAdmin: true,
});

SuperAdminSchema.pre('save', function (next) {
    const superAdmin = this;
    if (!superAdmin.isModified || !superAdmin.isNew) {
        next();
    } else {
        bcrypt.hash(superAdmin.password, 10, function (err, hash) {
            if (err) {
                console.log(
                    'Error hashing password for admin',
                    superAdmin.email,
                );
                next(err);
            } else {
                superAdmin.password = hash;
                next();
            }
        });
    }
});

module.exports = mongoose.model('SuperAdmin', SuperAdminSchema);
