const superAdminController = require('../controllers/superAdmin.controller');

const superAdminRoutes = {
    getAllAdmin: (_router, validateToken) => {
        _router.get('/super-admins', validateToken, superAdminController.find);
    },

    getAnAdmin: (_router, validateToken) => {
        _router.get(
            '/super-admins/:id',
            validateToken,
            superAdminController.findById,
        );
    },

    postAnAdmin: (_router) => {
        _router.post('/super-admins', superAdminController.create);
    },
};

module.exports = superAdminRoutes;
