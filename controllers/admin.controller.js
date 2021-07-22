const Admin = require('../models/admin.model');

exports.find = async (req, res) => {
    try {
        const allAdmin = await Admin.find();
        res.send(allAdmin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.findById = async (req, res) => {
    try {
        const anAdmin = await Admin.findById({ _id: req.params.id });
        res.send(anAdmin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.create = async (req, res) => {
    try {
        const admin = new Admin({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            whatsappNumber: req.body.whatsappNumber,
            userName: req.body.userName,
            password: req.body.password,
        });
        await admin.save();
        res.send(admin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to create an admin' });
    }
};

exports.edit = async (req, res) => {
    try {
        const admin = await Admin.findById({ _id: req.params.id });
        if (req.body.firstName) {
            admin.firstName = req.body.firstName;
        }
        if (req.body.lastName) {
            admin.lastName = req.body.lastName;
        }
        if (req.body.email) {
            admin.email = req.body.email;
        }
        if (req.body.phoneNumber) {
            admin.phoneNumber = req.body.phoneNumber;
        }
        if (req.body.whatsappNumber) {
            admin.whatsappNumber = req.body.whatsappNumber;
        }
        if (req.body.userName) {
            admin.userName = req.body.userName;
        }
        if (req.body.password) {
            admin.password = req.body.password;
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to edit super admin' });
    }
};
