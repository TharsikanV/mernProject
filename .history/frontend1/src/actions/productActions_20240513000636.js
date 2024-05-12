//product api ulla poi epd eduthiddu varaporam endra code ellaam vachirukka poram
//antha datas eduthiddu varum pothu states ellaam maaranum endrathayum code ah vachirukka poram
import axios from 'axios';
import { productsRequest, productsFail, productsSuccess, adminProductsRequest, adminProductsSuccess, adminProductsFail } from '../slices/productsSlice';
import { productRequest, productFail, productSuccess, createReviewRequest, createReviewSuccess, createReviewFail, newProductRequest, newProductSuccess, newProductFail, deleteProductRequest, deleteProductSuccess, deleteProductFail, updateProductRequest, updateProductSuccess, updateProductFail, reviewsRequest } from '../slices/productSlice';

export const getProducts=(keyword,price,category,rating,currentPage)=>async(dispatch)=>{
    try{
        dispatch(productsRequest())//action creater ah ull koduthiddam
        let link=`/api/v1/products?page=${currentPage}`;

        if(keyword){
            link+=`&keyword=${keyword}`;//concatinate panniram
        }
        if(price){
            link+=`&price[gte]=${price[0]}&price[lte]=${price[1]}`;//concatinate panniram
        }
        if(category){
            link+=`&category=${category}`;//concatinate panniram
        }
        if(rating){
            link+=`&ratings=${rating}`;//concatinate panniram
        }

        const {data}=await axios.get(link);
        dispatch(productsSuccess(data))
    }catch(error){
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
  
}

//product api ulla poi epd eduthiddu varaporam endra code ellaam vachirukka poram
//antha datas eduthiddu varum pothu states ellaam maaranum endrathayum code ah vachirukka poram
export const getProduct=id=>async(dispatch)=>{//id parameter ah vaankiram
    try{
        dispatch(productRequest())//action creater ah ull koduthiddam
        const {data}=await axios.get(`/api/v1/product/${id}`);
        dispatch(productSuccess(data))
    }catch(error){
        //handle error
        dispatch(productFail(error.response.data.message))
    }
  
}

export const createReview=reviewData=>async(dispatch)=>{//id parameter ah vaankiram
    try{
        dispatch(createReviewRequest())//action creater ah ull koduthiddam
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.put(`/api/v1/review`,reviewData,config);
        dispatch(createReviewSuccess(data))
    }catch(error){
        //handle error
        dispatch(createReviewFail(error.response.data.message))
    }
  
}

export const getAdminProducts=async(dispatch)=>{
    try{
        dispatch(adminProductsRequest())//action creater ah ulla koduthiddam
        const {data}=await axios.get(`/api/v1/admin/products`);
        dispatch(adminProductsSuccess(data))
    }catch(error){
        //handle error
        dispatch(adminProductsFail(error.response.data.message))
    }
  
}

export const createNewProduct=productData=>async(dispatch)=>{
    try{
        dispatch(newProductRequest())//action creater ah ulla koduthiddam
        const {data}=await axios.post(`/api/v1/admin/product/new`,productData);
        dispatch(newProductSuccess(data))
    }catch(error){
        //handle error
        dispatch(newProductFail(error.response.data.message))
    }
  
}

export const deleteProduct=id=>async(dispatch)=>{
    try{
        dispatch(deleteProductRequest())//action creater ah ulla koduthiddam
        await axios.delete(`/api/v1/admin/product/${id}`);
        dispatch(deleteProductSuccess())
    }catch(error){
        //handle error
        dispatch(deleteProductFail(error.response.data.message))
    }
  
}

export const updateProduct=(id,productData)=>async(dispatch)=>{
    try{
        dispatch(updateProductRequest())//action creater ah ulla koduthiddam
        const {data}=await axios.put(`/api/v1/admin/product/${id}`,productData);
        dispatch(updateProductSuccess(data))
    }catch(error){
        //handle error
        dispatch(updateProductFail(error.response.data.message))
    }
  
}

export const getReviews=id=>async(dispatch)=>{
    try{
        dispatch(reviewsRequest())//action creater ah ull koduthiddam
    
        const {data}=await axios.get(`/admin/reviews`,{params:{}});
        dispatch(productsSuccess(data))
    }catch(error){
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
  
}
