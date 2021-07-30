const Dispatcher = require('../models/dispatcher.model');
const decodeAuthToken = require('../utils/decodeToken').decodeToken;

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
    const doesEmailExit = await Dispatcher.find({ email: req.body.email });
    console.log('doesEmailExit', doesEmailExit);
    if (doesEmailExit.length === 0) {
        try {
            const userRole = decodeAuthToken.role;
            console.log('userRole', userRole);
            const dispatcher = new Dispatcher({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                whatsappNumber: req.body.whatsappNumber,
                userName: req.body.userName,
                password: req.body.password,
                fleetBrand: req.body.fleetBrand,
                fleetModel: req.body.fleetModel,
                fleetColor: req.body.fleetColor,
                fleetPlateNumber: req.body.fleetPlateNumber,
                fleetOwner: req.body.fleetOwner,
            });
            if (userRole === 'admin' || userRole === 'superAdmin') {
                await dispatcher.save();
                res.send(dispatcher);
            } else {
                res.status(401).send(
                    'Not authorized, only an admin or super admin can create a dispatcher',
                );
            }
        } catch (error) {
            console.log('error', error);
            res.status(error.status);
            res.send({ error, message: 'unable to create an order' });
        }
    } else {
        res.status(400).send('A dispatcher with this email already exist');
    }
};

exports.edit = async (req, res) => {
    const userRole = decodeAuthToken.role;

    if (userRole === 'admin' || userRole === 'superAdmin') {
        try {
            const dispatcher = await Dispatcher.findById({
                _id: req.params.id,
            });
            if (req.body.firstName) {
                dispatcher.firstName = req.body.firstName;
            }
            if (req.body.lastName) {
                dispatcher.lastName = req.body.lastName;
            }
            if (req.body.email) {
                dispatcher.email = req.body.email;
            }
            if (req.body.phoneNumber) {
                dispatcher.phoneNumber = req.body.phoneNumber;
            }
            if (req.body.whatsappNumber) {
                dispatcher.whatsappNumber = req.body.whatsappNumber;
            }
            if (req.body.userName) {
                dispatcher.userName = req.body.userName;
            }
            if (req.body.password) {
                dispatcher.password = req.body.password;
            }
            if (req.body.fleetBrand) {
                dispatcher.fleetBrand = req.body.fleetBrand;
            }
            if (req.body.fleetModel) {
                dispatcher.fleetModel = req.body.fleetModel;
            }
            if (req.body.fleetColor) {
                dispatcher.fleetColor = req.body.fleetColor;
            }
            if (req.body.fleetPlateNumber) {
                dispatcher.fleetPlateNumber = req.body.fleetPlateNumber;
            }

            if (req.body.fleetOwner) {
                dispatcher.fleetOwner = req.body.fleetOwner;
            }
            if (req.body.location) {
                dispatcher.location = req.body.location;
            }
        } catch (error) {
            console.log('error', error);
            res.status(error.status);
            res.send({ error, message: 'unable to edit dispatcher' });
        }
    } else {
        res.status(400).send('Not authorized to edit this dispatcher');
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const userRole = decodeAuthToken.role;
        if (userRole === 'admin' || userRole === 'superAdmin') {
            await Dispatcher.deleteOne({ _id: req.params.id });
            res.status(204).send();
        } else {
            res.status(400).send('Not authorized to delete this dispatcher');
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to delete order' });
    }
};
