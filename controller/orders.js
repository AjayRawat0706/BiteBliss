const model =require('../model/orders');
const { default: mongoose, trusted } = require("mongoose");
const Order =model.Order;
exports.createOrder=(req,res)=>{
     const order=new Order(req.body);
     order.save()  ;
     res.status(201).json(req.body)
  }
 
exports.getAllOrders =async(req,res)=>{
   const orders=await Order.find();
    res.json(orders); 
 } 
 
 exports.getOrder=async(req,res)=>{
    const id = req.params.id;
    const order=await Order.find({"email":id});
   res.json(order); 
}

 