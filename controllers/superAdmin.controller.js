const SuperAdmin = require('../models/superAdmin.model');

exports.find = async (req, res) => {
    try {
        const allAdmin = await SuperAdmin.find();
        res.send(allAdmin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({
            error: error,
            message: `unable to get all super admin`,
        });
    }
};

exports.findById = async (req, res) => {
    try {
        const anAdmin = await SuperAdmin.findById({ _id: req.params.id });
        res.send(anAdmin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({
            error,
            message: `unable to find super admin with id ${req.params.id}`,
        });
    }
};

exports.create = async (req, res) => {
    try {
        const superAdmin = new SuperAdmin({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            whatsappNumber: req.body.whatsappNumber,
            userName: req.body.userName,
            password: req.body.password,
        });
        await superAdmin.save();
        res.send(superAdmin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to create  super admin' });
    }
};

exports.edit = async (req, res) => {
    try {
        const superAdmin = await SuperAdmin.findById({ _id: req.params.id });
        if (req.body.firstName) {
            superAdmin.firstName = req.body.firstName;
        }
        if (req.body.lastName) {
            superAdmin.lastName = req.body.lastName;
        }
        if (req.body.email) {
            superAdmin.email = req.body.email;
        }
        if (req.body.phoneNumber) {
            superAdmin.phoneNumber = req.body.phoneNumber;
        }
        if (req.body.whatsappNumber) {
            superAdmin.whatsappNumber = req.body.whatsappNumber;
        }
        if (req.body.userName) {
            superAdmin.userName = req.body.userName;
        }
        if (req.body.password) {
            superAdmin.password = req.body.password;
        }
        if (req.body.orderQuota) {
            superAdmin.orderQuota = req.body.orderQuota;
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to edit super admin' });
    }
};
