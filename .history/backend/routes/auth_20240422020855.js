const express=require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
logoutUser

module.exports=router;