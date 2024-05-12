import { createSlice } from "@reduxjs/toolkit";


const userSlice= createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:{},
        users:[],
        isUserUpadated:false,
        isUserDeleted:false
    },
    reducers:{
        usersRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        usersSuccess(state,action){
            return{
                ...state,
                loading:false,
                users:action.payload.users,
            }
        },
        usersFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        userRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        userSuccess(state,action){
            return{
                ...state,
                loading:false,
                user:action.payload.user,
            }
        },
        usersFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        deleteUserRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        deleteUserSuccess(state,action){
            return{
                ...state,
                loading:false,
                isUserDeleted:true
            }
        },
        deleteUsersFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearUserDelete(state,action){
            return{
                ...state,
                isUserDeleted:false
            }
        },
        updateUserRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        updateUserSuccess(state,action){
            return{
                ...state,
                loading:false,
                isUserUpdated:true
            }
        },
        updateUsersFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearUserupdate(state,action){
            return{
                ...state,
                isUserUpdated:false
            }
        },
       
    }
});

const {actions,reducer}=productsSlice;//destructure

export const {
    productsRequest,
    productsSuccess,
    productsFail,
    adminProductsRequest,
    adminProductsSuccess,
    adminProductsFail,
    clearError
}=actions

export default reducer;