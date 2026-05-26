const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.end('route under construction');
});

router.post('/login', function(req, res){
    console.log(req.body);
    res.end('method : ok');
});

router.post('/signup', function(req, res){
    console.log(req.body);
    res.end('method : ok');
});

module.exports = router;