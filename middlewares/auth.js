const {verifyToken} = require('../utils/auth')

exports.checkForToken = function(req, res, next){
    const token = req.cookies['token'];
    if (!token) 
        return next();

    try{
        const payload = verifyToken(token);
        req.user = payload;
        next();
    }catch(error){
        return next();
    }
};