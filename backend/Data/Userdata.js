const bcryptjs=require("bcryptjs")


const user=[
   {
       name:"monirul",
       email:"admin75@getMaxListeners.com",
       password: bcryptjs.hashSync("123456",10),
       isAdmin:false
   },
   {
    name:"Saklim sk",
    email:"skm1234@gmail.com",
    password: bcryptjs.hashSync("987654",10),
   
    isAdmin:true
}
]

module.exports=user