const orderController = require('../controllers/orders.controller');

const orderRoutes = {
    getOrders: (_router, validateToken) => {
        _router.get('/orders', validateToken, orderController.find);
    },

    getOrder: (_router, validateToken) => {
        _router.get('/orders/:id', validateToken, orderController.findById);
    },

    postOrder: (_router, validateToken) => {
        _router.post('/orders', validateToken, orderController.create);
    },

    editOrder: (_router, validateToken) => {
        _router.patch('/orders/:id', validateToken, orderController.patch);
    },

    deleteOrder: (_router, validateToken) => {
        _router.delete('/orders/:id', validateToken, orderController.deleteOne);
    },

    // New routes
    getDispatcherOrders: (_router, validateToken) => {
        _router.get(
            '/orders/dispatcher/:id',
            validateToken,
            orderController.findByDispatcherId,
        );
    },

    updateDispatcherOrderStatus: (_router, validateToken) => {
        _router.put(
            '/orders/dispatcher/:id',
            validateToken,
            orderController.updateOrderStatus,
        );
    },

    getDispatcherCompletedOrders: (_router, validateToken) => {
        _router.get(
            '/orders/dispatcher/:id/completed',
            validateToken,
            orderController.findDispatcherCompletedOrders,
        );
    },
};
module.exports = orderRoutes;
