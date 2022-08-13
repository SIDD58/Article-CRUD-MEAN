const mongoose=require("mongoose");
///
const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:"No description"
    },
    read:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model("article",articleSchema);