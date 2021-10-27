const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:{required:true,type:String},
    age:Number,
 



})





module.exports = mongoose.model('user', userSchema);