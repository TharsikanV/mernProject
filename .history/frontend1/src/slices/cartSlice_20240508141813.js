import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],//local storage use panna poram
        loading:false
    },
    reducers:{
        addCartItemRequest(state,action){
            return{
                ...state,
                loading:true
            }
                
        },
        addCartItemSuccess(state,action){
            const item=action.payload

            const isItemExist=state.items.find(i=>i.product==item.product);
            //earkaave product iruntha athe eduthu vachikkum illanna null

            if (isItemExist) {
                state={
                    ...state,
                    loading:false,
                }
                
            }
            else{
                state={
                    items:[...state.items,item],
                    loading:false
                }
                localStorage.setItem('cartItems',JSON.stringify(state.items));
                //update panna state items ah localstoragela store panniddam
            }

            return state;
        },
        incre
       
    }
});

const {actions,reducer}=cartSlice;//destructure

export const {addCartItemRequest,addCartItemSuccess}=actions

export default reducer;