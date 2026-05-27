const jwt = require('jsonwebtoken');
const user = require('../models/user');


async function generateToken(id){
    const User = await user.findById(id);
    const payload = {
        _id : User._id,
        email : User.email,
        fullName : User.fullName
    }
    const token = jwt.sign(payload, "enter_any_random_this_is_secret_key")
    return token;
}

module.exports = {
    generateToken
};