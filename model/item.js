const mongoose =require('mongoose');
const { Schema}=mongoose;

const itemSchema =new Schema({
    title: {type:String,required:true,unique:true},
    price: {type: Number,min:[0,'wrong price']},
    rating: {type: Number,min:[0,'wrong min rating'],max:[5,'wrong max rating'],default:0},
    type: {type:String,required:true},
    category: {type:String,required:true},
    thumbnail: {type:String,required:true},
});

exports.Item = mongoose.model('Item', itemSchema);