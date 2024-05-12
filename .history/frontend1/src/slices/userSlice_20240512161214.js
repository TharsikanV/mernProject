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
       
        clearError(state,action){
            return{
                ...state,
                error:null
            }
        }
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