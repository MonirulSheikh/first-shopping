const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({
    User:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"User"
    },
    orderItem:[
        {
            name:{
                type:String,
                
            },
            qty:{
                type:Number,
                
            },
            price:{
                type:Number,
                
            },
            image:{
                type:String,
                required:true
            },
            product:{
                type:mongoose.Types.ObjectId,
               
                ref:"Product" //Product=table
            }
        }
    ],
    shippingAddress: {
        address: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        postalCode: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
      paymentMethod: {
        type: String,
        required: true,
      },
      paymentResult: {
        id: {
          type: String,
        },
        status: {
          type: String,
        },
        upload_status: {
          type: String,
        },
        email_address: {
          type: String,
        },
      },
      taxPrice: {
        type: Number,
        required: true,
        defualt: 0.0,
      },
      shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
      paidAt: {
        type: Date,
        
      },
      isDeliverd: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliverAt: {
        type: Date,
      }

},{timestamp:true})



const Order = mongoose.model("Order", orderSchema);

module.exports = Order;