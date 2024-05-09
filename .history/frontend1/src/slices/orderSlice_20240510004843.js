import { createSlice } from "@reduxjs/toolkit";


const orderSlice= createSlice({
    name:"order",
    initialState:{
       orderDetail:{},
       userOrders:[],
       loading:false
    },
    reducers:{
       createOrderRequest(state,action)
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