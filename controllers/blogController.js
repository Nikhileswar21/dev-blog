
const Blog = require('../models/blog');
exports.renderCreateBlog = function(req, res){
     res.render('createblog',{
        user : req.user
    });
}

exports.createNewBlog = async function(req, res){
    const {content,title} = req.body;
    try{
        if(!title || !content) throw new Error('All fields are mandatory');
        await Blog.create({
        content,
        title,
        coverImg : req.file.filename,
        createdBy : req.user._id
    });
    return res.render('createblog', {message : 'Blog created successfully'});

    }catch(error){
        res.render('createblog',{error});
    }
}