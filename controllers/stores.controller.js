const Stores = require('../models/stores');

exports.find = async (req, res) => {
    try {
        _validateToken();
        const stores = await Stores.find();
        res.send(stores);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.findById = async (req, res) => {
    try {
        const store = await Stores.findById({ _id: req.params.id });
        res.send(store);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.create = async (req, res) => {
    try {
        const store = new Stores({
            vendorName: req.body.vendorName,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
        });
        await store.save();
        res.send(store);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to create an admin' });
    }
};

exports.edit = async (req, res) => {
    try {
        const store = await Stores.findOne({ _id: req.params.id });
        if (req.body.vendorName) {
            store.vendorName = req.body.vendorName;
        }
        if (req.body.address) {
            store.address = req.body.address;
        }
        if (req.body.phoneNumber) {
            store.phoneNumber = req.body.phoneNumber;
        }
        await store.save();
        res.send(store);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to edit store' });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const deletedStore = await Stores.deleteOne({
            _id: req.params.id,
        });
        res.status(200).send({ deletedStore, message: 'deleted' });
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to delete store' });
    }
};
