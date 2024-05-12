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
                is
            }
        },
        deleteUsersFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
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