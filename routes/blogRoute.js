const express = require('express');
const router = express.Router();


router.get('/create', function(req, res){
    res.render('createblog');
});

router.post('/create', function(req,res){
    console.log(req.body);
    return res.render('createblog');
})

module.exports = router;