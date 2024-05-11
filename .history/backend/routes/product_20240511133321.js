const express=require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, getReviws, deleteReview, getAdminProducts } = require('../controllers/productController');
const router=express.Router();
const {isAuthenticatedUser, authorizeRoles}=require('../middlewares/authenticate');



router.route('/products').get(getProducts);//isAuthenticatedUser,
// router.route('/product/:id').get(getSingleProduct);
// router.route('/product/:id').put(updateProduct);
//////////////or///////////////////
router.route('/product/:id')
                            .get(getSingleProduct)
                            .put(updateProduct)
                            .delete(deleteProduct);
router.route('/review').put(isAuthenticatedUser,createReview)
                        .delete(deleteReview)
router.route('/reviews/').get(getReviws);


//Admin routes
router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),newProduct);
router.route('/admin/products').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);
module.exports=router;