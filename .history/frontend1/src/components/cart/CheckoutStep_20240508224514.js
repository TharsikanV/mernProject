export default function CheckoutSteps({ shipping, confimOrder, payment }) {
    return (

        <div className="checkout-progress d-flex justify-content-center mt-5">
            {shipping?}
            <div className="triangle2-active"></div>
            <div className="step active">Shipping Info</div>
            <div className="triangle-completed"></div>

            <div className="triangle2-active"></div>
            <div className="step active">Payment</div>
            <div className="triangle-active"></div>

            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Confirm Order</div>
            <div className="triangle-incomplete"></div>
        </div>
    )
}