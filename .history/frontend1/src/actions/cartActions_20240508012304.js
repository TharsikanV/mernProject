import {addCartItemRequest} from '../slices/cartSlice';
export const addCartItem=(id,quantity)=>async(dispatch)=>{
    try {
        dispatch(addCartItemRequest)
        const {data}=await axios.get(`/api/v1/product/`)
        
    } catch (error) {
        
    }
}