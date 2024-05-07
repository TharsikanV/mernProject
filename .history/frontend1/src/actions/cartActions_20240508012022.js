import {addCartItemRequest} from '../slices/'
export const addCartItem=(id,quantity)=>async(dispatch)=>{
    try {
        dispatch(addCartItemRequest())
        
    } catch (error) {
        
    }
}