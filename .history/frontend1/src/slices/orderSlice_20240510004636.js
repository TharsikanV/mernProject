import { createSlice } from "@reduxjs/toolkit";


const orderSlice= createSlice({
    name:"order",
    initialState:{
       orderDetail:
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
        increaseCartItemQty(state,action){
            state.items=state.items.map(item=>{
                if(item.product==action.payload){
                    item.quantity=item.quantity+1
                }
                return item;
            })
            localStorage.setItem('cartItems',JSON.stringify(state.items));
        },
        decreaseCartItemQty(state,action){
            state.items=state.items.map(item=>{
                if(item.product==action.payload){
                    item.quantity=item.quantity-1
                }
                return item;
            })
            localStorage.setItem('cartItems',JSON.stringify(state.items));
        },
        removeItemFromCart(state,action){
            const filterItems=state.items.filter(item=>{
                return item.product!=action.payload
            })
            localStorage.setItem('cartItems',JSON.stringify(filterItems));
            return{
                ...state,
                items:filterItems
            }
        },
        saveShippingInfo(state,action){
            localStorage.setItem('shippingInfo',JSON.stringify(action.payload));
            return{
                ...state,
                shippingInfo:action.payload
            }
        },
        orderCompleted(state,action){
            localStorage.removeItem('shippingInfo');
            localStorage.removeItem('cartItems');
            sessionStorage.removeItem('orderInfo');
            return{
                items:[],
                loading:false,
                shippingInfo:{}
            }
        },
       
    }
});

const {actions,reducer}=cartSlice;//destructure

export const {
    addCartItemRequest,
    addCartItemSuccess,
    increaseCartItemQty,
    decreaseCartItemQty,
    removeItemFromCart,
    saveShippingInfo,
    orderCompleted
}=actions

export default reducer;