const express =require("express")
const router=express.Router()
// const products=require("../Data/Products")
const UserModel=require("../Models/UserModel")
const OrderModel=require("../Models/OrderModel")
const productModel=require("../Models/productModel")

// home page 
router.get("/",(req,res)=>{
    res.send("home page ok")
})

// for all products
router.get("/products",async(req,res)=>{
 const product=await productModel.find({})

    res.json(product)
})
// for single product
router.get("/products/:id",async(req,res)=>{
    try {
        const idf=req.params.id
   
    const oneProduct=await productModel.findById(idf)
    res.json(oneProduct)
   
    } catch (error) {
        console.log("single product",error)
    }
    
})

// router.get("/products/2",(req,res)=>{
//     const oneProduct=products.find((x)=>x.id==2)
//     res.json(oneProduct)
// })

// export 
module.exports=router;