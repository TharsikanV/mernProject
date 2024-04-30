import { createSlice } from "@reduxjs/toolkit";



createSlice({
    name:"products",
    initialState:{
        loading:false
    },
    reducers:{
        productRequest(state,action){
            return{
                loading:true
            }
                
        },
        productsSuccess(state,action){
            return{
                loading:false,
                products:action.payload.products
            }
        },
        productsFail(){
            return{
                loading:false
                
            }
        }
    }
})