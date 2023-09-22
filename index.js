require('dotenv').config()
const express=require('express');
// const morgan =require('morgan');
const mongoose = require('mongoose');
const itemRouter =require('./routes/item');
const userRouter=require('./routes/user');
const path=require('path');
const orderRouter=require('./routes/orders');
const cors = require('cors');
const server=express();

server.use(express.static(path.resolve(__dirname,'build')))
server.use(cors());
server.use(express.json());
// server.use(morgan('default'))

server.use('/items',itemRouter.router);
server.use('/user',userRouter.router);
server.use('/orders',orderRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/foodApp');
console.log('database connected');
}

server.listen(8010,()=>{
  console.log('server started');
})