const express =require('express');
const userController =require('../controller/user');
const router =express.Router();

router 
.post('/',userController.createUser)
.get('/',userController.getAllUser)
.get('/:id',userController.getUser)
// .put('/:id',userController.replaceItem)
.patch('/:id',userController.updateUser)
.delete('/:id',userController.deleteUser)
.post('/:signIn',userController.matchUser)
exports.router=router;  