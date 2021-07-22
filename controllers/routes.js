const express = require('express');
const validateToken = require('../utils/validateToken').validateToken;
v;
const router = express.Router();

const dispatcherRoutes = require('./dispatcher.routes');
const adminRoutes = require('./admin.routes');
const orderRoutes = require('./orders.routes');
const storesRoutes = require('./stores.routes');

dispatcherRoutes.getDispatchers(router, validateToken);
dispatcherRoutes.getDispatcher(router, validateToken);
dispatcherRoutes.postDispatcher(router, validateToken);
dispatcherRoutes.deleteDispatcher(router, validateToken);

adminRoutes.getAllAdmin(router, validateToken);
adminRoutes.getAnAdmin(router, validateToken);
adminRoutes.postAnAdmin(router, validateToken);

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

module.exports = router;
