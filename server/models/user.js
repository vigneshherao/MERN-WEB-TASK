const mongoose = require("mongoose");


//creating a user Schema body
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
        
    }
})


//creating a user model for databse
const User = mongoose.model("User",userSchema);

module.exports = User;
