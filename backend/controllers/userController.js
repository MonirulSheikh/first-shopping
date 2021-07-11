const UserModel=require("../Models/UserModel")
const bcryptjs=require("bcryptjs")

const RegisterController=async(req,res)=>{
  
const {name,email,password,conformPassword}=req.body


try {
   if(!name || !password || !email || !conformPassword){
      res.status(428).json({message:"please fill all field"})
   }
const exiting =await UserModel.findOne({email})
if(exiting){
   return res.status(428).json({ message: "Email id alredy exit" })
      // console.log("Email id alredy exit")
}else if(password===conformPassword){
//    const data= new UserModel({email,password,name})
// const result= await data.save()
//    res.json(result)
   const data=await UserModel.create({email,password,name})
res.json(data)
   // console.log(data)
}else{
   return res.status(428).json({ message: "password not match" })

}

 
} catch (error) {
   console.log("register err",error)
}

}


const generateToken =require("../utils/generateToken")
const loginController=async(req,res)=>{
   const {email,password1}=req.body
    const user=await UserModel.findOne({email})
   //  const very=await bcryptjs.compare(password,user.password) 

   if(!email || !password1){
      res.status(401).json({err:"Please fill all Field"})

   
   }else if(user && await user.matchPassword(password1)){
    token= generateToken(user._id)
   //   res.cookie("mon",token)
   res.json({_id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token})
   
   }else{
      res.status(401).json({err:"Invalid User Details"})
   }

}

const profileController=async(req,res)=>{
   const user = await UserModel.findById(req.Id);
   // console.log("_id:",req.Id)
   // console.log(req.users)
res.json({user:user})
}
module.exports={loginController,profileController,RegisterController}