import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { orderDetail as orderDetailAction } from '../../actions/orderActions';
import Loader from '../layouts/Loader';

export default function OrderDetail() {
    const { orderDetail, loading } = useSelector(state => state.orderState)
    const {
        shippingInfo = {},
        user = {},
        orderStatus = "Processing",
        orderItems = [],
        totalPrice = 0,
        paymentInfo = {}
    } = orderDetail;
    const isPaid = paymentInfo && paymentInfo.status === "succeeded" ? true : false;
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(orderDetailAction(id))
    }, [id])

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Order # {orderDetail._id}</h1>

                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b>{user.name}</p>
                            <p><b>Phone:</b>{shippingInfo.phoneNo}</p>
                            <p className="mb-4"><b>Address:</b>{shippingInfo.address},{shippingInfo.city},{shippingInfo.postalCode},{shippingInfo.state},{shippingInfo.country}</p>
                            <p><b>Amount:</b> ${totalPrice}</p>

                            <hr />

                            <h4 className="my-4">Payment</h4>
                            <p className={isPaid?'greenColor':'redColor'} ><b>{isPaid?'PAID':'NOT PAID'}</b></p>


                            <h4 className="my-4">Order Status:</h4>
                            <p className={orderStatus && orderStatus.includes('Delivered')?'greenColor':'redColor'}><b>{orderStatus}</b></p>


                            <h4 className="my-4">Order Items:</h4>

                            <hr />
                            <div className="cart-item my-1">
                                {orderItems && orderItems.map(item=>(

                                ))}
                                
                            </div>
                            <hr />
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>


    )
}