//product api ulla poi epd eduthiddu varaporam endra code ellaam vachirukka poram
//antha datas eduthiddu varum pothu states ellaam maaranum endrathayum code ah vachirukka poram
import axios from 'axios';
import { productsRequest, productsFail, productsSuccess } from '../slices/productsSlice';
import { productRequest, productFail, productSuccess } from '../slices/productSlice';

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

export const createRevi=id=>async(dispatch)=>{//id parameter ah vaankiram
    try{
        dispatch(productRequest())//action creater ah ull koduthiddam
        const {data}=await axios.get(`/api/v1/product/${id}`);
        dispatch(productSuccess(data))
    }catch(error){
        //handle error
        dispatch(productFail(error.response.data.message))
    }
  
}