const express =require("express")
const router=express.Router()
const {loginController,profileController,RegisterController} =require("../controllers/userController")
// const products=require("../Data/Products")
const protect=require("../middleWare/auth")
const UserModel=require("../Models/UserModel")
const OrderModel=require("../Models/OrderModel")
const productModel=require("../Models/productModel")


router.route("/").post(RegisterController)
router.post("/login",loginController)
router.route("/profile").get(protect, profileController)

module.exports=router