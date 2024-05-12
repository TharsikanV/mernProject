import { createSlice } from "@reduxjs/toolkit";


const orderSlice= createSlice({
    name:"order",
    initialState:{
       orderDetail:{},
       userOrders:[],
       adminOrders:[],
       isOrderDeleted:false,
       loading:false
    },
    reducers:{
       createOrderRequest(state,action){
        return{
            ...state,
            loading:true
        }
       },
       createOrderSuccess(state,action){
        return{
            ...state,
            loading:false,
            orderDetail:action.payload.order
        }
       },
       createOrderFail(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
        }
       },
       clearError(state,action){
        return{
            ...state,
            error:null
        }
       },
       userOrdersRequest(state,action){
        return{
            ...state,
            loading:true
        }
       },
       userOrdersSuccess(state,action){
        return{
            ...state,
            loading:false,
            userOrders:action.payload.orders
        }
       },
       userOrdersFail(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
        }
       },
       orderDetailRequest(state,action){
        return{
            ...state,
            loading:true
        }
       },
       orderDetailSuccess(state,action){
        return{
            ...state,
            loading:false,
            orderDetail:action.payload.order
        }
       },
       orderDetailFail(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
        }
       },
       adminOrdersRequest(state,action){
        return{
            ...state,
            loading:true
        }
       },
       adminOrdersSuccess(state,action){
        return{
            ...state,
            loading:false,
            adminOrders:action.payload.orders
        }
       },
       adminOrdersFail(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
        }
       },
       deleteOrdersRequest(state,action){
        return{
            ...state,
            loading:true
        }
       },
       deleteOrderSuccess(state,action){
        return{
            ...state,
            loading:false,
            isOrderDeleted:true
        }
       },
       deleteOrderFail(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
        }
       },
    }
});

const {actions,reducer}=orderSlice;//destructure

export const {
    createOrderRequest,
    createOrderSuccess,
    createOrderFail,
    clearError,
    userOrdersRequest,
    userOrdersSuccess,
    userOrdersFail,
    orderDetailRequest,
    orderDetailSuccess,
    orderDetailFail
}=actions

export default reducer;