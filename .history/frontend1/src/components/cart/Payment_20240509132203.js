import { useElements, useStripe } from "@stripe/react-stripe-js"

export default function Payment(){
    const stripe=useStripe();
    const elements=useElements();
    const dispatch=
    return(
        <h1>Payment</h1>
    )
}