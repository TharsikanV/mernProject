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
        productSuccess(state,action){
            return{
                loading:false,
                products:act
            }
        }
    }
})