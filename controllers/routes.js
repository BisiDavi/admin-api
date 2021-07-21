const express = require('express');
const router = express.Router();
const {
    getDispatchers,
    getDispatcher,
    postDispatcher,
    deleteDispatcher,
} = require('./dispatcher.routes');
const { getAllAdmin, getAnAdmin, postAnAdmin } = require('./admin.routes');
const {
    getOrders,
    getOrder,
    postOrder,
    editOrder,
    deleteOrder,
} = require('./orders.routes');

getDispatchers(router);
getDispatcher(router);
postDispatcher(router);
deleteDispatcher(router);

getAllAdmin(router);
getAnAdmin(router);
postAnAdmin(router);

getOrders(router);
getOrder(router);
postOrder(router);
editOrder(router);
deleteOrder(router);

module.exports = router;
