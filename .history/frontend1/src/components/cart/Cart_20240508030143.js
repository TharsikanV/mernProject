import { Fragment } from "react";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
export default function Cart() {
    const { items } = useSelector(state => state.cartState)

    return (
        <Fragment>
            {items.length == 0 ?
                <h2 className="mt-5">Your Cart is Empty</h2> :
                <Fragment>
                    <h2 className="mt-5">Your Cart: <b>{items.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">
                            {items.map(item => (

                            ))}
                                
                                
                            
                            <hr/>
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Order Summary</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">1 (Units)</span></p>
                                <p>Est. total: <span className="order-summary-values">$245.67</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block">Check out</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }

        </Fragment>

    )
}