const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.end('route under construction');
});


module.exports = router;