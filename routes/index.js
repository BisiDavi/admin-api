const express = require('express');
const router = express.Router();
const validateToken = require('../utils/validateToken').validateToken;

const dispatcherRoutes = require('./dispatcher.routes');
const adminRoutes = require('./admin.routes');
const superAdminRoutes = require('./superAdmin.routes');
const orderRoutes = require('./orders.routes');
const authRoutes = require('./auth.routes');
const storesRoutes = require('./stores.routes');

dispatcherRoutes.getDispatchers(router, validateToken);
dispatcherRoutes.getDispatcher(router, validateToken);
dispatcherRoutes.postDispatcher(router, validateToken);
dispatcherRoutes.deleteDispatcher(router, validateToken);
dispatcherRoutes.editDispatcher(router, validateToken);

adminRoutes.getAllAdmin(router, validateToken);
adminRoutes.getAnAdmin(router, validateToken);
adminRoutes.postAnAdmin(router, validateToken);
adminRoutes.editAdmin(router, validateToken);

superAdminRoutes.getAllAdmin(router, validateToken);
superAdminRoutes.getAnAdmin(router, validateToken);
superAdminRoutes.editAdmin(router, validateToken);
superAdminRoutes.postAnAdmin(router);

orderRoutes.getOrders(router, validateToken);
orderRoutes.getOrder(router, validateToken);
orderRoutes.postOrder(router, validateToken);
orderRoutes.editOrder(router, validateToken);
orderRoutes.deleteOrder(router, validateToken);

storesRoutes.getStores(router, validateToken);
storesRoutes.getStore(router, validateToken);
storesRoutes.postStore(router, validateToken);
storesRoutes.deleteStore(router, validateToken);
storesRoutes.editStore(router, validateToken);

authRoutes.login(router);

module.exports = router;
