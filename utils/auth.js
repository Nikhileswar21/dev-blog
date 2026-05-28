const jwt = require('jsonwebtoken');
const user = require('../models/user');

const Secret_key = "$upperMoonDemons@"

async function generateToken(id){
    const User = await user.findById(id);
    const payload = {
        _id : User._id,
        email : User.email,
        fullName : User.fullName
    }
    const token = jwt.sign(payload, Secret_key)
    return token;
}

function verifyToken(token){
    return jwt.verify(token, Secret_key);
}

module.exports = {
    generateToken,
    verifyToken
};