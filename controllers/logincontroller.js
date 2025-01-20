const User = require("../model/user.model");
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const loginHandler = async (req, res) => {
    try{
        const user = await User.findOne({number: req.body.number});
        if(!user){
            return res.status(401).json({message: "User not found"});
        }
        //user? res.json(user): res.json({message: "user not found"});

        if(!req.body.password){
            return res.status(200).json({ exists: true, message: 'User exists' })
        };

        const decodedPassword = cryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(cryptoJS.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({message: "Incorrect Password"});

        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign( {username: user.username}, process.env.ACCESS_TOKEN);

        res.json({...rest, accessToken});
    
    }catch(err){
        res.json({message: "login data not posted"});
    }
};

module.exports = loginHandler;

