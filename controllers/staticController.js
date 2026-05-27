const renderHomepage = function(req, res){
    res.render('home');
};

const renderLogin = function(req, res){
    if(req.cookies['token']) return res.redirect('/');
    res.render('login');
};

const renderSignup = function(req, res){
    res.render('signup');
};

module.exports = {
    renderHomepage,
    renderLogin,
    renderSignup
}