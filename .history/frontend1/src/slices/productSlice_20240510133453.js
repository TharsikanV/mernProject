import { createSlice } from "@reduxjs/toolkit";


const productSlice= createSlice({
    name:"product",
    initialState:{
        loading:false,
        product:{},//aarampathila product irukkaathu ipd kodukkirathu moolam undefined problem ah thadukkalaam
        isReviewSubmitted:false
    },
    reducers:{
        productRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        productSuccess(state,action){
            return{
                ...state,
                loading:false,
                product:action.payload.product
            }
        },
        productFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        createReviewRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        createReviewSuccess(state,action){
            return{
                ...state,
                loading:false,
                isReviewSubmitted:true
            }
        },
        createReviewFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearRe
        ,
        clearError(state,action){
            return{
                ...state,
                error:null
            }
            
        }
    }
});

const {actions,reducer}=productSlice;//destructure

export const {
    productRequest,
    productSuccess,
    productFail,
    createReviewRequest,
    createReviewSuccess,
    createReviewFail,
    clearError
}=actions

export default reducer;