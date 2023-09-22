const express =require('express');
const itemController =require('../controller/items');
const router =express.Router();

router 
.post('/',itemController.createItem)
.get('/',itemController.getAllItems)
.get('/:id',itemController.getItem)
.put('/:id',itemController.replaceItem)
.patch('/:id',itemController.updateItem)
.delete('/:id',itemController.deleteItem)

exports.router=router;
    