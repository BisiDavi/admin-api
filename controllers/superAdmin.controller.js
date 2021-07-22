const superAdmin = require('../models/superAdmin');

exports.find = async (req, res) => {
    try {
        const allAdmin = await superAdmin.find();
        res.send(allAdmin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.findById = async (req, res) => {
    try {
        const anAdmin = await superAdmin.findById({ _id: req.params.id });
        res.send(anAdmin);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.create = async (req, res) => {
    try {
        const superAdmin = new superAdmin({
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
        res.send({ error, message: 'unable to create an admin' });
    }
};
