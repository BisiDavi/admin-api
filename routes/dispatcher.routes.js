const dispatcherController = require('../controllers/dispatcher.controller');
const decodeAuthToken = require('../utils/decodeToken').decodeToken;

const dispatcherRoutes = {
    getDispatchers: (_router, validateToken) => {
        _router.get('/dispatchers', validateToken, dispatcherController.find);
    },

    getDispatcher: (_router, validateToken) => {
        _router.get(
            '/dispatchers/:id',
            validateToken,
            dispatcherController.findById,
        );
    },

    postDispatcher: (_router, validateToken) => {
        _router.post(
            '/dispatchers',
            validateToken,
            dispatcherController.create,
        );
    },

    editDispatcher: (_router, validateToken) => {
        _router.post(
            '/dispatchers/:id',
            validateToken,
            dispatcherController.edit,
        );
    },

    deleteDispatcher: (_router, validateToken) => {
        _router.delete(
            '/dispatchers/:id',
            validateToken,
            dispatcherController.deleteOne,
        );
    },
};
module.exports = dispatcherRoutes;
