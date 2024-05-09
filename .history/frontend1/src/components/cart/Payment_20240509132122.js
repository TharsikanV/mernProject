import { useStripe } from "@stripe/react-stripe-js"

export default function Payment(){
    const stripe=useStripe();
    const elements=
    return(
        <h1>Payment</h1>
    )
}