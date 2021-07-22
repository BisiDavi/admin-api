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
};
module.exports = orderRoutes;
