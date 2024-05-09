
import {createOrderRequest} from '../slices/'
export const createOrder=order=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest)
    } catch (error) {
        
    }
}