//product api ulla poi epd eduthiddu varaporam endra code ellaam vachirukka poram
//antha datas eduthiddu varum pothu states ellaam maaranum endrathayum code ah vachirukka poram
import axios from 'axios';
import { productsRequest, productsFail, productsSuccess } from '../slices/productsSlice';

export const getProduct=async(dispatch)=>{
    try{
        dispatch(productsRequest())//action creater ah ull koduthiddam
        const {data}=await axios.get('/api/v1/products');
        dispatch(productsSuccess(data))
    }catch(error){
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
  
}