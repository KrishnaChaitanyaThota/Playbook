const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email : { 
        type :String,
        required : true,
        
    },
    phonenumber :{
        type :Number,
        required : true,

    },
    password : { 
        type :String,
        required : true,
        
    }
})


const userDetail = new mongoose.model("userDetail", userschema);

module.exports= userDetail;