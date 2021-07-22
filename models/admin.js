const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    whatsappNumber: String,
    userName: String,
    password: String,
});

AdminSchema.pre('save', function (next) {
    const admin = this;
    if (!admin.isModified || !admin.isNew) {
        next();
    } else {
        bcrypt.hash(admin.password, 10, function (err, hash) {
            if (err) {
                console.log(
                    'Error hashing password for admin',
                    admin.firstName,
                );
                next(err);
            } else {
                admin.password = hash;
                next();
            }
        });
    }
});

module.exports = mongoose.model('Admin', AdminSchema);
