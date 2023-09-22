const model =require('../model/item');
const { default: mongoose, trusted } = require("mongoose");
const Item =model.Item;
exports.createItem=(req,res)=>{
     const item=new Item(req.body);
     item.save()  ;
     res.status(201).json(req.body)
  }
 
exports.getAllItems =async(req,res)=>{
   const items=await Item.find();
    res.json(items); 
 } 
 
 exports.getItem=async(req,res)=>{
    const id = req.params.id;
    const item=await Item.find({"category":id});
   res.json(item); 
}
 exports.replaceItem=async(req,res)=>{
   const id = req.params.id;
   try{
      const doc=await Item.findOneAndReplace({_id:id},req.body,{new:true})
      res.status(201).json(doc);
   }  
   catch(err){
     console.log(err);
     res.status(400).json(err);
   }
}
 exports.updateItem=async(req,res)=>{
    const id = req.params.id;
    try{ 
       const doc=await Item.findOneAndUpdate({_id:id},req.body,{new:true})
       res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
}
 exports.deleteItem=async(req,res)=>{
   const id = req.params.id;
    try{
       const doc=await Item.findOneAndDelete({"title":id})
       res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
}
