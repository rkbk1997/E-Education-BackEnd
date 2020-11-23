var express = require('express');
var router = express.Router();
var courseModel = require('../models/course');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body)
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage });


router.post('/course',isValidUser, upload.single('pic1'), (req,res) => {
    console.log((req.body),req.file)
    
    res.send(true)
    
})

function isValidUser(req, res, next) {
    if (req.isAuthenticated()) next();
    else 
    return res.status(401).json({ message: 'Unauthorized Request' });
  }
  

module.exports = router;