const Orders = require('../models/order.model');

exports.find = async (req, res) => {
    try {
        const allOrders = await Orders.find({
            assignedDispatcherID: null,
        });
        res.send(allOrders);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.findById = async (req, res) => {
    try {
        const order = await Orders.findById({ _id: req.params.id });
        res.send(order);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.findByDispatcherId = async (req, res) => {
    try {
        const order = await Orders.find({
            assignedDispatcherID: req.params.id,
        });
        res.send(order);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.findDispatcherCompletedOrders = async (req, res) => {
    try {
        const order = await Orders.find({
            _id: req.params.id,
            status: 'DELIVERED',
        });
        res.send(order);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Orders.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: { status: req.body.status },
            },
        );
        res.send(order);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error: error });
    }
};

exports.create = async (req, res) => {
    try {
        const order = new Orders({
            pickupVendor: req.body.pickupVendor,
            pickupContact: req.body.pickupContact,
            pickupDescription: req.body.pickupDescription,
            deliveryAddress: req.body.deliveryAddress,
            note: req.body.note,
            phoneNumber: req.body.phoneNumber,
            admin: req.body.admin,
        });
        await order.save();
        res.send(order);
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to create an order' });
    }
};

exports.patch = async (req, res) => {
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
        if (req.body.deliveryAddress) {
            orders.deliveryAddress = req.body.deliveryAddress;
        }
        if (req.body.note) {
            orders.note = req.body.note;
        }
        if (req.body.status) {
            orders.status = req.body.status;
        }
        if (req.body.assignedDispatcherID) {
            orders.assignedDispatcherID = req.body.assignedDispatcherID;
        }
        if (req.body.phoneNumber) {
            orders.phoneNumber = req.body.phoneNumber;
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
};

exports.deleteOne = async (req, res) => {
    try {
        await Order.deleteOne({ _id: req.params.id });
        res.status(204).send('deleted');
    } catch (error) {
        console.log('error', error);
        res.status(error.status);
        res.send({ error, message: 'unable to delete order' });
    }
};
