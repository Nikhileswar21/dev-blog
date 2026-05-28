const renderHomepage = function(req, res){
    res.render('home', {
        user : req.user,
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