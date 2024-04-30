//product api ulla poi epd eduthiddu varaporam endra code ellaam vachirukka poram
//antha datas eduthiddu varum pothu states ellaam maaranum endrathayum code ah vachirukka poram
import axios from 'axios';
import { productRequest, productFail, productSuccess } from '../slices/productSlice';

export const getProduct=async(dispatch)=>{
    try{
        dispatch(productRequest())//action creater ah ull koduthiddam
        const {data}=await axios.get(`/api/v1/product/6623bdc2dd1c1e149ce5d121`);
        dispatch(productSuccess(data))
    }catch(error){
        //handle error
        dispatch(productFail(error.response.data.message))
    }
  
}