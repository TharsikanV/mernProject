import { createSlice } from "@reduxjs/toolkit";


const authSlice= createSlice({
    name:"auth",
    initialState:{
        loading:false,
        isAuth
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