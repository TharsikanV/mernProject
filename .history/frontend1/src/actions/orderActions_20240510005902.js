
import {createOrderRequest} from '../slices/orderSlice';
import 
export const createOrder=order=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest)
        await axios
    } catch (error) {
        
    }
}