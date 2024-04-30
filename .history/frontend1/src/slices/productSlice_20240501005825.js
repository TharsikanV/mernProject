import { createSlice } from "@reduxjs/toolkit";


const productSlice= createSlice({
    name:"product",
    initialState:{
        loading:false
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
                products:action.payload.products
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

const {actions,reducer}=productsSlice;//destructure

export const {productRequest,productsSuccess,productsFail}=actions

export default reducer;