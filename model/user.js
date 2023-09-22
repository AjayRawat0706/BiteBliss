const mongoose =require('mongoose');
const { Schema}=mongoose;

const userSchema =new Schema({
    emailId: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    address:{type:[Schema.Types.Mixed]},
    cart:{type:[Schema.Types.Mixed]},
});

exports.User = mongoose.model('User', userSchema);