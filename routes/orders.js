const express =require('express');
const orderController =require('../controller/orders');
const router =express.Router();

router 
.post('/',orderController.createOrder)
.get('/',orderController.getAllOrders)
.get('/:id',orderController.getOrder)


exports.router=router;