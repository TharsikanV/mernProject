
import {createOrderRequest} from '../slices/orderSlice';
import axios from 'axios';
export const createOrder=order=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest)
        const {data}=await axios.post('/api/v1/order/new',order)
    } catch (error) {
        
    }
}