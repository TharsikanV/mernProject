
import {createOrderRequest} from '../slices/orderSlice';
import axios from 'a'
export const createOrder=order=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest)
        await axios
    } catch (error) {
        
    }
}