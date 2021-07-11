const OrderModel = require("../Models/OrderModel")
const UseMr  =require("../Models/OrderModel")
const addOrderItems = async (req, res) => {
    try {
        const { orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;
   
        if (orderItems && orderItems.length === 0) {
            res.status(400).json({ mess: "No order Found" });

        } else {

            const order = new OrderModel({
                orderItem: orderItems,
                shippingAddress: shippingAddress,
                User:req.Id,
                paymentMethod,
        
                taxPrice,
                shippingPrice,
                totalPrice
            })
const result=await order.save()
res.status(200).json(result)
// console.log(result)
        }



    } catch (error) {
 res.status(400).json({err:"order Fail"})
    }


}
//  getAllOrders
const  getAllOrders=async(req,res)=>{
    try {
        const orders=await OrderModel.findById(req.params.id).populate("User","name email")
       
            if (orders) {
                res.status(200).json(orders);
            }
    } catch (error) {
        res.status(400).json({err:"Order Not Found"})
    }
   
      
}

//paidendpoint
const updateOrderToPaid =async (req, res) => {
  const order = await OrderModel.findById(req.params.id);
  if (order) {
    (order.isPaid = true),
      (order.paidAt = Date.now()),
      (order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      });
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404).json({err:"Order Not Found"});
    
  }
};
module.exports={addOrderItems,getAllOrders,updateOrderToPaid}