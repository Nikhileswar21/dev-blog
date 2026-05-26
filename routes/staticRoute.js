const express = require('express');
const router = express.Router();
const {renderHomepage, renderLogin, renderSignup} = require('../controllers/staticController');


router.get('/', renderHomepage);

router.get('/login', renderLogin);
router.get('/signup', renderSignup);
  




module.exports = router;