
import {createOrderFail, createOrderRequest, createOrderSuccess, orderDetailRequest, userOrdersFail, userOrdersRequest, userOrdersSuccess} from '../slices/orderSlice';
import axios from 'axios';
export const createOrder=order=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest())
        const {data}=await axios.post('/api/v1/order/new',order)
        dispatch(createOrderSuccess(data))
    } catch (error) {
        dispatch(createOrderFail(error.response.data.message))
    }
}

export const userOrders=async(dispatch)=>{
    try {
        dispatch(userOrdersRequest())
        const {data}=await axios.get('/api/v1/myOrders')
        dispatch(userOrdersSuccess(data))
    } catch (error) {
        dispatch(userOrdersFail(error.response.data.message))
    }
}

export const orderDetail=id=>async(dispatch)=>{
    try {
        dispatch(orderDetailRequest())
        const {data}=await axios.get('/api/v1/order/${}`)
        dispatch(userOrdersSuccess(data))
    } catch (error) {
        dispatch(userOrdersFail(error.response.data.message))
    }
}