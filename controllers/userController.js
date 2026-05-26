const user = require('../models/user');


exports.handleUserLogin = function(req, res){
    return res.render('login');
};

exports.handleUserSignup = async function(req, res){
    const {fullName, email, password} = req.body;
    try{
        if(!fullName) throw new Error('Full name required');
        if(!email) throw new Error('email required');
        if(!password || password.length < 8) throw new Error('password required and should be atleast 8 characters long');

        await user.create({fullName, email, password});
        return res.render('login', {message : 'signup process successful, you can now login'});
    }catch(error){
        res.render('signup', {error});
    }
};