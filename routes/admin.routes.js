const adminController = require('../controllers/admin.controller');

const adminRoutes = {
    getAllAdmin: (_router, validateToken) => {
        _router.get('/admins', validateToken, adminController.find);
    },

    getAnAdmin: (_router, validateToken) => {
        _router.get('/admins/:id', validateToken, adminController.findById);
    },

    postAnAdmin: (_router, validateToken) => {
        _router.post('/admins', validateToken, adminController.create);
    },
		editAdmin: (_router, validateToken) => {
			_router.patch('/admins/:id', validateToken, adminController.ed)
		}
};

module.exports = adminRoutes;
