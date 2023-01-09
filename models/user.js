const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
});
module.exports = mongoose.model('people',userSchema);