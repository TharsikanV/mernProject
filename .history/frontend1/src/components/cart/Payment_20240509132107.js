import { useStripe } from "@stripe/react-stripe-js"

export default function Payment(){
    const stripe=useStripe();
    return(
        <h1>Payment</h1>
    )
}