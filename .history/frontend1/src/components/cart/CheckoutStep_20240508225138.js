import { Link } from "react-router-dom";

export default function CheckoutSteps({ shipping, confimOrder, payment }) {
    return (

        <div className="checkout-progress d-flex justify-content-center mt-5">
            {shipping ?
                <Link to="/shipping">
                    <div className="triangle2-active"></div>
                    <div className="step active-step">Shipping Info</div>
                    <div className="triangle-active"></div>
                    {/* intha className ellam css thaan bootsrap illa */}
                </Link> :
                <Link to="/shipping">
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Shipping Info</div>
                    <div className="triangle-incomplete"></div>
                    {/* intha className ellam css thaan bootsrap illa */}
                </Link>


            }

            {confimOrder?
                <Link to="/order/confirm">
                    <div className="triangle2-active"></div>
                    <div className="step active-step">Confirm Order</div>
                    <div className="triangle-active"></div>
                    {/* intha className ellam css thaan bootsrap illa */}
                </Link> :
                <Link to="/order/confirm">
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Shipping Info</div>
                    <div className="triangle-incomplete"></div>
                    {/* intha className ellam css thaan bootsrap illa */}
                </Link>


            }
            <div className="triangle2-active"></div>
            <div className="step active">Payment</div>
            <div className="triangle-active"></div>

            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Confirm Order</div>
            <div className="triangle-incomplete"></div>
        </div>
    )
}