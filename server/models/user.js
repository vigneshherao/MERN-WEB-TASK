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
    password: {
        type: String,
        // Custom validation: password is required if googleId is not provided
        required: function() {
            return !this.googleId;
        },
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true, // Allows for users without a Google ID
    }
})


//creating a user model for databse
const User = mongoose.model("User",userSchema);

module.exports = User;
