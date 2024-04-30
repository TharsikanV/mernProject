//product api ulla poi epd eduthiddu varaporam endra code ellaam vachirukka poram
//antha datas eduthiddu varum pothu states ellaam maaranum endrathayum code ah vachirukka poram
import axios from 'axios';
import { productRequest } from '../slices/productsSlice';

export const getProducts=async(dispatch)=>{
    try{
        dispatch(productRequest())//action creater ah ull koduthiddam
        const {data}=await axios.get('}/api/v1/products');
        dispatch(pro)
    }catch(error){
        //handle error

    }
  
}