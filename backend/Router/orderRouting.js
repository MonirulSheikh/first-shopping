const express =require("express")
const router=express.Router()
const OrderModel=require("../Models/OrderModel")
const {addOrderItems,getAllOrders,updateOrderToPaid} =require("../controllers/orderController")
const protect =require("../middleWare/auth")
// new order 
router.post("/",protect,addOrderItems)
router.get("/:id",protect,getAllOrders)
router.put("/:id/pay",protect,updateOrderToPaid)
module.exports=router