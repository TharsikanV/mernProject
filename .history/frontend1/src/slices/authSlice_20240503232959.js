import { createSlice } from "@reduxjs/toolkit";


const authSlice= createSlice({
    name:"auth",
    initialState:{
        loading:false,
        isAuthenticated:false
    },
    reducers:{
        loginRequest(state,action){
            return{
                loading:true,
                isAuthenticated
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