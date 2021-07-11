require('dotenv').config()
const mongoose=require("mongoose")
const products=require("./Data/Products")
const userdata=require("./Data/Userdata")
const UserModel=require("./Models/UserModel")
const OrderModel=require("./Models/OrderModel")
const productModel=require("./Models/productModel")
require("./db/database")

const ImportData=async()=>{
    try {
        
 await OrderModel.deleteMany()
 await UserModel.deleteMany()
 await productModel.deleteMany()
const createUser=await UserModel.insertMany(userdata) 

const Admin=createUser[0]._id
const sampleData=products.map((x)=>{
    return {...x,User:Admin}
})

const result=await productModel.insertMany(sampleData)

console.log("imported Data")
process.exit()

    } catch (error) {
        console.log("insert err",error)
    }
}

const dataDestroy=async()=>{
    try {
        await OrderModel.deleteMany()
        await UserModel.deleteMany()
        await productModel.deleteMany()
        process.exit()
    }
     catch (error) {
        console.log(" destoy err",error)
    }
}
if(process.argv[2]==="-d"){
    // console.log(process.argv[3])
dataDestroy()
}else{
    ImportData()
}