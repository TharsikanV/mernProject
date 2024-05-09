import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Payment(){
    const stripe=useStripe();
    const elements=useElements();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const orderInfo=JSON.parse(sessionStorage.getItem('orderInfo'))//json object ah edukka
    const {user}=useSelector(state=>state.authState)
    const {items:cartItems,shippingInfo}=useSelector(state=>state.cartState)
    const paymentData={
        amount:Math.round(orderInfo.totalPrice *100),//cents kanakkula anuppa
        shipping:{
            name:user.name,
            address:{
            city:shippingInfo.city,
            postal_code:shippingInfo.postalCode,
            country:shippingInfo.country,
            state:shippingInfo.state,
            line1:shippingInfo.address
        },
        phone:shippingInfo.phoneNo
        }
    }

    const order={
        orderItems:cartItems,
        shippingInfo
    }

    if(orderInfo){
        order.itemsPrice=orderInfo.itemsPrice,
        order.shippingPrice=orderInfo.shippingPrice,
        order.taxPrice=orderInfo.taxPrice,
        order.totalPrice=orderInfo.totalPrice
    }

    

    return(
        <h1>Payment</h1>
    )
}