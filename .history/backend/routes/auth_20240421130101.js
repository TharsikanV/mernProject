const express=require('express');
const { registerUser } = require('../controllers/authController');
const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(log);

module.exports=router;