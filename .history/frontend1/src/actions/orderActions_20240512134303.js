
import {adminOrdersFail, adminOrdersRequest, adminOrdersSuccess, createOrderFail, createOrderRequest, createOrderSuccess, deleteOrderRequest, orderDetailFail, orderDetailRequest, orderDetailSuccess, userOrdersFail, userOrdersRequest, userOrdersSuccess} from '../slices/orderSlice';
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
        const {data}=await axios.get(`/api/v1/order/${id}`)
        dispatch(orderDetailSuccess(data))
    } catch (error) {
        dispatch(orderDetailFail(error.response.data.message))
    }
}

export const adminOrders=async(dispatch)=>{
    try {
        dispatch(adminOrdersRequest())
        const {data}=await axios.get('/api/v1/admin/orders')
        dispatch(adminOrdersSuccess(data))
    } catch (error) {
        dispatch(adminOrdersFail(error.response.data.message))
    }
}

export const deleteOrder=id=>async(dispatch)=>{
    try {
        dispatch(deleteOrderRequest())
        const {data}=await axios.delete(`/api/v1/admin/order/${id}`)
        dispatch(adminOrdersSuccess(data))
    } catch (error) {
        dispatch(adminOrdersFail(error.response.data.message))
    }
}