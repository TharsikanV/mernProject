import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
        product:{}//aarampathila product irukkaathu ipd kodukkirathu moolam undefined problem ah thadukkalaam
    },
    reducers:{
        productRequest(state,action){
            return{
                loading:true
            }
                
        },
        productSuccess(state,action){
            return{
                loading:false,
                product:action.payload.product
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