const express = require('express');
const router = express.Router();
const {renderHomepage, renderLogin} = require('../controllers/staticController');


router.get('/', renderHomepage);

router.get('/login', renderLogin);
  




module.exports = router;