const express = require('express');
const router = express.Router();
const dispatcherRoutes = require('./dispatcher.routes');
const adminRoutes = require('./admin.routes');
const orderRoutes = require('./orders.routes');
const storesRoutes = require('./stores.routes');

dispatcherRoutes.getDispatchers(router);
dispatcherRoutes.getDispatcher(router);
dispatcherRoutes.postDispatcher(router);
dispatcherRoutes.deleteDispatcher(router);

adminRoutes.getAllAdmin(router);
adminRoutes.getAnAdmin(router);
adminRoutes.postAnAdmin(router);

orderRoutes.getOrders(router);
orderRoutes.getOrder(router);
orderRoutes.postOrder(router);
orderRoutes.editOrder(router);
orderRoutes.deleteOrder(router);

storesRoutes.getStores(_router);
storesRoutes.getStore(_router);
storesRoutes.postStore(_router);
storesRoutes.deleteStore(_router);
storesRoutes.editStore(_router);

module.exports = router;
