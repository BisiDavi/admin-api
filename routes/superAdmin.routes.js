const superAdminController = require('../controllers/superAdmin.controller');

const adminRoutes = {
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

    postAnAdmin: (_router, validateToken) => {
        _router.post(
            '/super-admins',
            validateToken,
            superAdminController.create,
        );
    },
};

module.exports = adminRoutes;
