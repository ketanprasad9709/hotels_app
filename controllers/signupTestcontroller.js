const User = require("../model/user.model");

const signupTesthandler = async(req, res) => {

    try{
        const user = await User.findOne({ $or: [{ number: req.body.number }, { email: req.body.email }]});
        
        if(!user){
            return res.status(401).json({exists: false, message: "User not found"});
          };
  
        return res.status(200).json({ exists: true, message: "User exixts" });
        
    } catch(err){
        res.json({ message: "Data for credendials check not posted" });
    };
}

module.exports = signupTesthandler;

