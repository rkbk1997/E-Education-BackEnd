var express = require('express');
var router = express.Router();
var contactmodel = require('../models/contactus');
var mail = require('../mail');
var courseModel = require('../models/course');

router.post('/contact',(req,res)=>{
    console.log(req.body);
    mail.log(req.body , info =>{
        res.send(true);
    } )
})

router.post('/support' , (req,res)=>{
    console.log(req.body);
    res.send(true)
})

router.post('/curse', (req,res) => {
    console.log(req.body)
    res.send(true)
})

module.exports = router;