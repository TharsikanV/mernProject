const express=require('express');
const multer=require('multer');
const path=require('path');

const upload=multer({storage:multer.diskStorage({
    destination:function(req,file,cb){//cb means call back function
        cb(null,path.join(__dirname,'..','uploads/user'))//null ean enda error iruntha setpannanum but error irukkathu
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})})

const { 
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword, 
    getUserProfile,
    changePassword,
    updateProfile,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/authController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/register').post(upload.sregisterUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/password/change').put(isAuthenticatedUser,changePassword);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);//first login aaki irukkanum appathaana profile edukkalaam
router.route('/update').put(isAuthenticatedUser,updateProfile);

//Admin routes
router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),getAllUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getUser)
                                .put(isAuthenticatedUser,authorizeRoles('admin'),updateUser)
                                .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser);

module.exports=router;