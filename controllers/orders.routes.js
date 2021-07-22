const Orders = require('../models/order');

const orderRoutes = {
    getOrders: (_router) => {
        _router.get('/orders', async (req, res) => {
            try {
                const allOrders = await Orders.find();
                res.send(allOrders);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error: error });
            }
        });
    },

    getOrder: (_router) => {
        _router.get('/orders/:id', async (req, res) => {
            try {
                const order = await Orders.findById({ _id: req.params.id });
                res.send(order);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error: error });
            }
        });
    },

    postOrder: (_router) => {
        _router.post('/orders', async (req, res) => {
            try {
                const order = new Orders({
                    pickupVendor: req.body.pickupVendor,
                    pickupContact: req.body.pickupContact,
                    pickupDescription: req.body.pickupDescription,
                    deliveryDetails: req.body.deliveryDetails,
                    note: req.body.note,
                    numberOfDeliveries: req.body.numberOfDeliveries,
                    admin: req.body.admin,
                });
                await order.save();
                res.send(order);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error, message: 'unable to create an order' });
            }
        });
    },

    editOrder: (_router) => {
        _router.patch('/order/:id', async (req, res) => {
            try {
                const orders = await Orders.findOne({ _id: req.params.id });
                if (req.body.pickupVendor) {
                    orders.pickupVendor = req.body.pickupVendor;
                }
                if (req.body.pickupContact) {
                    orders.pickupContact = req.body.pickupContact;
                }
                if (req.body.pickupDescription) {
                    orders.pickupDescription = req.body.pickupDescription;
                }
                if (req.body.note) {
                    orders.note = req.body.note;
                }
                if (req.body.numberOfDeliveries) {
                    orders.numberOfDeliveries = req.body.numberOfDeliveries;
                }
                if (req.body.admin) {
                    orders.admin = req.body.admin;
                }
                await orders.save();
                res.send(orders);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error, message: 'unable to edit order' });
            }
        });
    },

    deleteOrder: (_router) => {
        _router.delete('/order/:id', async (req, res) => {
            try {
                await Order.deleteOne({ _id: req.params.id });
                res.status(204).send();
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error, message: 'unable to delete order' });
            }
        });
    },
};
module.exports = orderRoutes;
