import { createSlice } from "@reduxjs/toolkit";


const orderSlice= createSlice({
    name:"order",
    initialState:{
       orderDetail:{},
       userOrders:[],
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
            orderDetail:action.payload
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
            error:nu
        }
       },
    }
});

const {actions,reducer}=orderSlice;//destructure

export const {
    createOrderRequest,
    createOrderSuccess,
    createOrderFail
}=actions

export default reducer;