//product api ulla poi epd eduthiddu varaporam endra code ellaam vachirukka poram
//antha datas eduthiddu varum pothu states ellaam maaranum endrathayum code ah vachirukka poram
import axios from 'axios';
import { productsRequest, productsFail, productsSuccess } from '../slices/productsSlice';

export const getProducts=(keyword,currentPage)=>async(dispatch)=>{
    try{
        dispatch(productsRequest())//action creater ah ull koduthiddam
        let link=`/api/v1/products?page=${currentPage}`;

        if(keyword){
            link=`&keyword=${}`
        }

        const {data}=await axios.get(link);
        dispatch(productsSuccess(data))
    }catch(error){
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
  
}