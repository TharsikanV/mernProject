import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Payment(){
    const stripe=useStripe();
    const elements=useElements();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    return(
        <h1>Payment</h1>
    )
}