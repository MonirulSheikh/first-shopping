const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{ type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{type:Boolean,
        required:true,
        default:false

    },tokens:[
        {
             token:{
                type:String,
             }
    }]
},{timestamps:true})



// userSchema.pre("save", async function (next) {
//     if(this.isModified("password")){
//         this.password=await  bcryptjs.hash(this.password,10)
//     }
//     next()
// })


userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcryptjs.hash(this.password,10)
    }
    next()
})
// userSchema.methods.createtoken=async function(){
//     try {
//         const token=await jwt.sign({_id:this._id},process.env.SCRET_KEY)
// this.tokens=this.tokens.concat({token:token})
// await this.save()
// return token

//     } catch (error) {
//         console.log("token generate err",error)
//     }
// }
userSchema.methods.matchPassword=async function(pass){
    return await bcryptjs.compare(pass,this.password)
}
const User=mongoose.model("User",userSchema)
module.exports=User