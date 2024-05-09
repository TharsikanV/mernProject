import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useDispatch } from "react-redux";

export default function Payment(){
    const stripe=useStripe();
    const elements=useElements();
    const dispatch=useDispatch();

    
    return(
        <h1>Payment</h1>
    )
}