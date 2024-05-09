import { useElements, useStripe } from "@stripe/react-stripe-js"
import { CardNumberElement,CardExpiryElement,CardCvcElement } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateShipping } from "./Shipping";
import axios from "axios";

export default function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))//json object ah edukka
    const { user } = useSelector(state => state.authState)
    const { items: cartItems, shippingInfo } = useSelector(state => state.cartState)
    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100),//cents kanakkula anuppa
        shipping: {
            name: user.name,
            address: {
                city: shippingInfo.city,
                postal_code: shippingInfo.postalCode,
                country: shippingInfo.country,
                state: shippingInfo.state,
                line1: shippingInfo.address
            },
            phone: shippingInfo.phoneNo
        }
    }

    const order = {
        orderItems: cartItems,
        shippingInfo
    }

    if (orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice;
            order.shippingPrice = orderInfo.shippingPrice;
            order.taxPrice = orderInfo.taxPrice;
            order.totalPrice = orderInfo.totalPrice;
    }

    useEffect(() => {
        validateShipping(shippingInfo, navigate)
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        document.querySelector('#pay_btn').disabled=true;
        try {
            const {data}=await axios.post('/api/v1/payment/process',paymentData)
            const clientSecret=data.client_secret
            stripe.confirmCardPayment(clientSecret,{
                payment_method:{
                    card:elements.getElement(CardNumberElement),
                    billing_details:{
                        
                    }
                }
            })
        } catch (error) {
            
        }
    }

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-4">Card Info</h1>
                    <div className="form-group">
                        <label htmlFor="card_num_field">Card Number</label>
                        <CardNumberElement
                            type="text"
                            id="card_num_field"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="card_exp_field">Card Expiry</label>
                        <CardExpiryElement
                            type="text"
                            id="card_exp_field"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="card_cvc_field">Card CVC</label>
                        <CardCvcElement
                            type="text"
                            id="card_cvc_field"
                            className="form-control"
                            value=""
                        />
                    </div>


                    <button
                        id="pay_btn"
                        type="submit"
                        className="btn btn-block py-3"
                    >
                        Pay - {`$${orderInfo && orderInfo.totalPrice}`}
                    </button>

                </form>
            </div>
        </div>
    )
}