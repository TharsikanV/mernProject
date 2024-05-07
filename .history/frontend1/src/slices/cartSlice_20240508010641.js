import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],//local storage use panna poram
        loadin:false
    },
    reducers:{
        addCartItemRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        addCartItemSuccess(state,action){
            const item=action.payload

            const 

            return{
                ...state,
                loading:false,
                
            }
        },
        productFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
    }
});

const {actions,reducer}=productSlice;//destructure

export const {productRequest,productSuccess,productFail}=actions

export default reducer;