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
            error
        }
       },
    }
});

const {actions,reducer}=cartSlice;//destructure

export const {
    addCartItemRequest,
    addCartItemSuccess,
    increaseCartItemQty,
    decreaseCartItemQty,
    removeItemFromCart,
    saveShippingInfo,
    orderCompleted
}=actions

export default reducer;