
import {createOrderRequest} from '../slices/orderSlice';
import axios from 'axios';
export const createOrder=order=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest)
        await axios.post('/api/v1/order/new')
    } catch (error) {
        
    }
}