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
                ...state,//earkanave statela irukkira values ah kondu vanthidum thevyanatha kela maathikkalaam
                loading:true,
            }
                
        },
        loginSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        loginFail(state,action){
            return{
                ...state,
                loading:false,
                // isAuthenticated:false, thevalla
                error:action.payload
            }
        }
    }
});

const {actions,reducer}=Slice;//destructure

export const {productRequest,productSuccess,productFail}=actions

export default reducer;