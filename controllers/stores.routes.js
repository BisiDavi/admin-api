const Stores = require('../models/stores');

const storesRoutes = {
    getStores: (_router) => {
        _router.get('/stores', async (req, res) => {
            try {
                const stores = await Stores.find();
                res.send(stores);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error: error });
            }
        });
    },

    getStore: (_router) => {
        _router.get('/store/:id', async (req, res) => {
            try {
                const store = await Stores.findById({ _id: req.params.id });
                res.send(store);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error: error });
            }
        });
    },

    postStore: (_router) => {
        _router.post('/store', async (req, res) => {
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
        });
    },

    editStore: (_router) => {
        _router.patch('/store/:id', async (req, res) => {
            try {
                const store = await Stores.findByOne({ _id: req.params.id });
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
        });
    },

    deleteStore: (_router) => {
        _router.delete('/store/:id', async (req, res) => {
            try {
                await Stores.deleteOne({ _id: req.params.id });
                res.status(204).send();
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error, message: 'unable to delete store' });
            }
        });
    },
};

module.exports = storesRoutes;
