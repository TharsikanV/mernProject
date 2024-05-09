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
    const {items:cartItems}=useSelector(state=>state.cartState)
    const paymentData

    return(
        <h1>Payment</h1>
    )
}