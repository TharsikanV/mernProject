import { useElements, useStripe } from "@stripe/react-stripe-js"

export default function Payment(){
    const stripe=useStripe();
    const elements=useElements()
    return(
        <h1>Payment</h1>
    )
}