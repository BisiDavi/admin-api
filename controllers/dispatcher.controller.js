const Dispatcher = require('../models/dispatcher');

exports.find = async (req, res) => {
    try {
        const allDispatchers = await Dispatcher.find();
        res.send(allDispatchers);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.findById = async (req, res) => {
    try {
        const dispatcher = await Dispatcher.findById({
            _id: req.params.id,
        });
        res.send(dispatcher);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.create = async (req, res) => {
    try {
        const dispatcher = new Dispatcher({
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            whatsappNumber: req.body.whatsappNumber,
            userName: req.body.userName,
            password: req.body.password,
            fleetBrand: req.body.fleetBrand,
            fleetModel: req.body.fleetModel,
            fleetColor: req.body.fleetColor,
            fleetOwner: req.body.fleetOwner,
        });
        await dispatcher.save();
        res.send(dispatcher);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to create an order' });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        await Dispatcher.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to delete order' });
    }
};