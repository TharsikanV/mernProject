
import {createOrderRequest} from '../slices/orderSlice';
im
export const createOrder=order=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest)
        await axios
    } catch (error) {
        
    }
}