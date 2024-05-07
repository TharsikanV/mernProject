import {addCartItemRequest, addCartItemSuccess} from '../slices/cartSlice';
export const addCartItem=(id,quantity)=>async(dispatch)=>{
    try {
        dispatch(addCartItemRequest)
        const {data}=await axios.get(`/api/v1/product/${id}`)
        dispatch(addCartItemSuccess({
            product:data.product._id,
            name:data.product.name,
            price:data.product.price,
            image:data.product.images[0].image,
            stock
        }))
        
    } catch (error) {
        
    }
}