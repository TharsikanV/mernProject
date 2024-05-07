import {addCartItemRequest} from '../slices/cartSlice';
export const addCartItem=(id,quantity)=>async(dispatch)=>{
    try {
        dispatch(addCartItemRequest)

        
    } catch (error) {
        
    }
}