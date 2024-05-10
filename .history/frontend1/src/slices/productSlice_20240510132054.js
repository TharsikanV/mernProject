import { createSlice } from "@reduxjs/toolkit";


const productSlice= createSlice({
    name:"product",
    initialState:{
        loading:false,
        product:{}//aarampathila product irukkaathu ipd kodukkirathu moolam undefined problem ah thadukkalaam
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
        },
        createReviewRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        createReviewSuccess(state,action){
            return{
                loading:false,
                is
            }
        },
        createReviewFail(state,action){
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