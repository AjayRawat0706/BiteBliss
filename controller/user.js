const {User} =require('../model/user');
const { default: mongoose, trusted } = require("mongoose");

exports.createUser=async(req,res)=>{ 
   try{
      const user1=await User.findOne({"emailId":req.body.emailId}).exec();
      if(user1===null){ 
         const user=new User(req.body);
         user.save();
         res.status(201).json(req.body)
      }else{
         res.status(401).json({message:'User Id already exist'})
      }     
   }
   catch(error){
      res.status(401).json({message:'User Id already exist'})
   }
 }

exports.getAllUser =async(req,res)=>{
  const user=await User.find();
   res.json(user);  
}

exports.getUser=async(req,res)=>{
   const id = req.params.id;
   const user=await User.find({"emailId":id});
   res.json(user); 
}
exports.matchUser=async(req,res)=>{
   try{
      console.log(req.body)
      const user=await User.findOne({"emailId":req.body.emailId}).exec();
      if(!user){
         res.status(401).json({message:'invalid credentials'})
      }else if(user.password===req.body.password){
         res.status(200).json(user);
      }else{
         res.status(401).json({message:'invalid credentials'})
      }
   }catch(err){
      res.status(400).json("nooooooo")
   }

}

exports.updateUser=async(req,res)=>{
   const id = req.params.id;
   try{
      const doc=await User.findOneAndUpdate({"emailId":id},req.body,{new:true})
      res.status(201).json(doc);
   }
   catch(err){
     console.log(err);
     res.status(400).json(err);
   }
}

exports.deleteUser=async(req,res)=>{
  const id = req.params.id;
   try{
      const doc=await User.findOneAndDelete({_id:id})
      res.status(201).json(doc);
   }
   catch(err){
     console.log(err);
     res.status(400).json(err);
   }
}
