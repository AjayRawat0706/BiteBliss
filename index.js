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

server.use(express.json());
// server.use(morgan('default'))
server.use(cors());

server.use('/items',itemRouter.router);
server.use('/user',userRouter.router);
server.use('/orders',orderRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
console.log('database connected');
}

server.listen(process.env.PORT,()=>{
  console.log('server started');
})