const Admin = require('../models/admin');

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
