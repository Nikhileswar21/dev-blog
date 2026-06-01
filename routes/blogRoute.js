const express = require('express');
const Blog = require('../models/blog');
const {renderCreateBlog, createNewBlog} = require('../controllers/blogController');
const multer = require('multer');

const router = express.Router();


//multer for file upload handling
// gets the file from the user and stores it in the public/uploads folder

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, ('./public/uploads/'));
    },
    filename : (req,file,cb) => {
    cb(null, `${req.user._id}-${Date.now()}-${file.originalname}`);
}
});
const upload = multer({storage});


// blog routes
router.get('/create', renderCreateBlog);

router.post('/create', upload.single('coverImg'), createNewBlog);

module.exports = router;