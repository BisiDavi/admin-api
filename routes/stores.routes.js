const storesController = require('../controllers/stores.controller');

const storesRoutes = {
    getStores: (_router, validateToken) => {
        _router.get('/stores', validateToken, storesController.find);
    },

    getStore: (_router, validateToken) => {
        _router.get('/stores/:id', validateToken, storesController.findById);
    },

    postStore: (_router, validateToken) => {
        _router.post('/stores', validateToken, storesController.create);
    },

    editStore: (_router, validateToken) => {
        _router.patch('/stores/:id', validateToken, storesController.edit);
    },

    deleteStore: (_router, validateToken) => {
        _router.delete(
            '/stores/:id',
            validateToken,
            storesController.deleteOne,
        );
    },
};

module.exports = storesRoutes;
