const express=require('express');
const { 
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword, 
    getUserProfile,
    changePassword,
    updateProfile,
    getAllUsers
} = require('../controllers/authController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/password/change').put(isAuthenticatedUser,changePassword);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);//first login aaki irukkanum appathaana profile edukkalaam
router.route('/update').put(isAuthenticatedUser,updateProfile);

//Admin routes
router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),getAllUsers);




module.exports=router;