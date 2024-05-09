import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useDispatch } from "react-redux";

export default function Payment(){
    const stripe=useStripe();
    const elements=useElements();
    const dispatch=useDispatch();
    const navigate=useNav

    return(
        <h1>Payment</h1>
    )
}