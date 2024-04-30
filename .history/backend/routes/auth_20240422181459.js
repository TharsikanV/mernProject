const express=require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/')


module.exports=router;