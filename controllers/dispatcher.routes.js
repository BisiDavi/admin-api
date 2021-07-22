const bcrypt = require('bcrypt');
const Dispatcher = require('../models/dispatcher');

const dispatcherRoutes = {
    getDispatchers: (_router) => {
        _router.get('/dispatchers', async (req, res) => {
            try {
                const allDispatchers = await Dispatcher.find();
                res.send(allDispatchers);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error: error });
            }
        });
    },

    getDispatcher: (_router) => {
        _router.get('/dispatchers/:id', async (req, res) => {
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
        });
    },

    postDispatcher: (_router) => {
        _router.post('/dispatchers', async (req, res) => {
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
        });
    },

    deleteDispatcher: (_router) => {
        _router.delete('/dispatchers/:id', async (req, res) => {
            try {
                await Dispatcher.deleteOne({ _id: req.params.id });
                res.status(204).send();
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error, message: 'unable to delete order' });
            }
        });
    },
};
module.exports = dispatcherRoutes;
