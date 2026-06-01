//display the blogs in the homepage

const Blogs = require('../models/blog');


const renderHomepage = async function(req, res){
    const allBlogs = await Blogs.find({});
    res.render('home', {
        user : req.user,
        blogs : allBlogs
    });
};

const renderLogin = function(req, res){
    if(req.user) return res.redirect('/');
    return res.render('login');
};

const renderSignup = function(req, res){
     if(req.user) return res.redirect('/');
    return res.render('signup');
};

module.exports = {
    renderHomepage,
    renderLogin,
    renderSignup
}