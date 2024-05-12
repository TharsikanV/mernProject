const express=require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, getReviws, deleteReview, getAdminProducts } = require('../controllers/productController');
const router=express.Router();
const {isAuthenticatedUser, authorizeRoles}=require('../middlewares/authenticate');
const multer = require('multer');
const path =require('path');

const upload=multer({storage:multer.diskStorage({
    destination:function(req,file,cb){//cb means call back function
        cb(null,path.join(__dirname,'..','uploads/product'))//null ean enda error iruntha setpannanum but error irukkathu
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})})

router.route('/products').get(getProducts);//isAuthenticatedUser,
// router.route('/product/:id').get(getSingleProduct);
// router.route('/product/:id').put(updateProduct);
//////////////or///////////////////
router.route('/product/:id')
                            .get(getSingleProduct);
router.route('/review').put(isAuthenticatedUser,createReview)
                        .delete(deleteReview)



//Admin routes
router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),upload.array('images'),newProduct);
router.route('/admin/products').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);
router.route('/admin/product/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser,authorizeRoles('admin'),upload.array('images'),updateProduct);
router.route('/admin/reviews/').get(getReviws);
;
module.exports=router;