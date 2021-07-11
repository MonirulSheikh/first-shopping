const jwt=require("jsonwebtoken")
const UserModel=require("../Models/UserModel")
const protect=async(req,res,next)=>{
    try {
    //   const cokk=await req.ookies.mon  
const token=req.headers.authorization
// /console.log(cokk)
if (!token) {
    res.status(401).json({err:"Not Authorized, not token"});
    throw new Error("Not Authorized, not token");
  }
const user_verify=  jwt.verify(token,process.env.SCRET_KEY)
req.Id=user_verify.id
req.users=user_verify

    } catch (error) {
        console.log("auth",error)
       
         res.status(401);
        throw new Error("Not Authorized , Token failed");
    }
   
    next()
}

module.exports=protect;