const mongoose =require('mongoose');
const { Schema}=mongoose;

const orderSchema =new Schema({
    email:{type:String,required:true},
    items:{type:[Schema.Types.Mixed]},
    address:{type:[Schema.Types.Mixed]},
});

exports.Order = mongoose.model('Order', orderSchema); 