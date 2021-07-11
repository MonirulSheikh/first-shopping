const jwt=require("jsonwebtoken")

const generateToken = (id) => {
    
    return jwt.sign({ id }, process.env.SCRET_KEY, {
        expiresIn: "15d",
      });
}

module.exports=generateToken