const mongoose=require("mongoose")
const db=process.env.DB

mongoose.connect(db,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}).
then(()=>console.log("Connection Sucessful")).catch((err)=>console.log("Connection Failed Due to",err))