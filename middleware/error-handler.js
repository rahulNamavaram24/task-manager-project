
const {customAPIError}=require('../errors/customErrors')

const errorHandlingMiddleware=(err,req,res,next)=>{
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:err})
}

module.exports=errorHandlingMiddleware