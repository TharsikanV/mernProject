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
        },
        clearError(state,action){
            return{
                ...state,
                loading:false,
                error:null
            }
        },
        registerRequest(state,action){
            return{
                ...state,//earkanave statela irukkira values ah kondu vanthidum thevyanatha kela maathikkalaam
                loading:true,
            }
                
        },
        registerSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        registerFail(state,action){
            return{
                ...state,
                loading:false,
                // isAuthenticated:false, thevalla
                error:action.payload
            }
        },
        loadUserRequest(state,action){
            return{
                ...state,//earkanave statela irukkira values ah kondu vanthidum thevyanatha kela maathikkalaam
                isAuthenticated:false,
                loading:true,
            }
                
        },
        loadUserSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        loadUserFail(state,action){
            return{
                ...state,
                loading:false,
                // isAuthenticated:false, thevalla
                error:action.payload
            }
        },
        logoutSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:false
            }
        },
        logoutFail(state,action){
            return{
                ...state,
                error:action.payload
            }
        },

    }
});

const {actions,reducer}=authSlice;//destructure

export const {
    loginRequest,//action creaters
    loginSuccess,
    loginFail,
    clearError,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail
    }=actions;

export default reducer;