const jwt = require('jsonwebtoken')

const adminAuthenticator = async (req,res,next) => {
    console.log(req.headers["authorization"], "\n\n\n\n\n\n\n\n\n\n\n\token");
    let token = req.headers["authorization"];
    if(token){
        let decoded = await jwt.verify(token,process.env.JWT_SECRET);
        if(decoded){
            next()
        }else{
            res.status(501).send({success:false, message: "Unauthorized user!!"})
        }
    }else{
        res.status(501).send({success:false, message: "Unauthorized user!!"})
        return true;
    }
}

module.exports = adminAuthenticator;