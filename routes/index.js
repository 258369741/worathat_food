const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res) =>{
    res.render('index',{myData});
});

module.exports = router;