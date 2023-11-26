const mongoose=require('mongoose')

const taskSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Require"],
        trim:true,
        maxlength:[20,"Limit: 20 Characters"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})



module.exports=mongoose.model("Task",taskSchema)