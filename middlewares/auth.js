// const jwt = require('jsonwebtoken');
// const User = require("../models/User");

// const auth = async(req, res, next){
//     let token;
//     if(req.headers.authorization.startsWith('Bearer ')){
//         token = req.headers.authorization.split(' ')[1];

//         const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
//         req.user = await User.findById(decoded._id)
//         next()

//     }
// }

// const gentoken = (id)=>{
//     return jwt.sign({id}, 'secret')
// }

// module.exports = { auth };