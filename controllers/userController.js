const {generateToken} = require('../utils/auth');
const user = require('../models/user');


const handleUserLogin = async  function(req, res){
    const {email, password} = req.body;
    try{
        if(!email || !password) throw new Error ('email and password required');
        const userEmail = await user.findOne({email});
        if(!userEmail) throw new Error('user with this mail doesnt exist');
        if(userEmail.password !== password) throw new Error ('password invalid, please enter correct password');
        const token = await generateToken(userEmail._id);
        
        return res
        .cookie("token", token).redirect('/');

    }catch(error){
        res.render('login', {error});
    }
};

const handleUserSignup = async function(req, res){
    const {fullName, email, password} = req.body;
    try{
        if(!fullName) throw new Error('Full name required');
        if(!email) throw new Error('email required');
        if(!password || password.length < 8) throw new Error('password required and should be atleast 8 characters long');

        const User = await user.create({fullName, email, password});
         const token = await generateToken(User._id);
       return res
        .cookie("token", token).redirect('/');
    }catch(error){
        res.render('signup', {error});
    }
};

module.exports = {
    handleUserLogin,
    handleUserSignup
};