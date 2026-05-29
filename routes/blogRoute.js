const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, ('./public/uploads/'));
    },
    filename : (req,file,cb) => {
    cb(null, file.originalname);
}
});

const upload = multer({storage});


router.get('/create', function(req, res){
    res.render('createblog');
});

router.post('/create', upload.single('coverImg'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    return res.render('createblog');
})

module.exports = router;