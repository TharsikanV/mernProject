import { Fragment, useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { orderDetail as orderDetailAction, updateOrder } from "../../actions/orderActions";
import { toast } from "react-toastify";
import { clearOrderUpdated, clearError } from "../../slices/orderSlice";

export default function UpdateOrder() {
    const { id: orderId } = useParams();//id ah eduthiddam

    const { loading, isOrderUpdated, error, orderDetail } = useSelector(state => state.orderState);
    const { user = {}, orderItems = [], shippingInfo = {}, totalPrice = 0, paymentInfo = {} } = orderDetail;
    const isPaid = paymentInfo.status === 'succeeded' ? true : false;
    const [orderStatus, setOrderStatus] = useState("Processing");


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onImagesChange = (e) => {
        const files = Array.from(e.target.files); //object ah array ah mathanum

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState == 2) {//read panni mudicha
                    setImagesPreview(oldArray => [...oldArray, reader.result])//return panna porathu maathi amaikka padda value
                    //reader.result la new url thaan varum
                    setImages(oldArray => [...oldArray, file])
                }
            }//apd kondatha athvachu enna pannirathu endu sollum

            reader.readAsDataURL(file)//data ah url maari read panni konduvnthidum
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const orderData = {};

        orderData.orderStatus = orderStatus;

        dispatch(updateOrder(orderId, orderData))
    }

    const clearImagesHandler = () => {
        setImages([]);
        setImagesPreview([]);
        setImagesCleared(true);
    }



    useEffect(() => {
        if (isOrderUpdated) {
            toast('Order Updated successfully', {
                type: 'success',
                // position:toast.POSITION.BOTTOM_CENTER
                onOpen: () => dispatch(clearOrderUpdated())
            })
            return;
        }

        if (error) {
            toast(error, {
                // position:toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => {//toaster vara error ah null aakkanum
                    dispatch(clearError())
                }
            })
            return
        }

        dispatch(orderDetailAction(orderId))
    }, [isOrderUpdated, error, dispatch])

    useEffect(() => {//ithu ethukku enda order ooda datas ah form la kondanthu vaikkanum
        if (orderDetail._id) {
            setOrderStatus(orderDetail.orderStatus);

        }
    }, [orderDetail])

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Order # {orderDetail._id}</h1>

                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b>{user.name}</p>
                            <p><b>Phone:</b>{shippingInfo.phoneNo}</p>
                            <p className="mb-4"><b>Address:</b>{shippingInfo.address},{shippingInfo.city},{shippingInfo.postalCode},{shippingInfo.state},{shippingInfo.country}</p>
                            <p><b>Amount:</b> ${totalPrice}</p>

                            <hr />

                            <h4 className="my-4">Payment</h4>
                            <p className={isPaid ? 'greenColor' : 'redColor'} ><b>{isPaid ? 'PAID' : 'NOT PAID'}</b></p>


                            <h4 className="my-4">Order Status:</h4>
                            <p className={orderStatus && orderStatus.includes('Delivered') ? 'greenColor' : 'redColor'}><b>{orderStatus}</b></p>


                            <h4 className="my-4">Order Items:</h4>

                            <hr />
                            <div className="cart-item my-1">
                                {orderItems && orderItems.map(item => (
                                    <div className="row my-5">
                                        <div className="col-4 col-lg-2">
                                            <img src={item.image} alt={item.name} height="45" width="65" />
                                        </div>

                                        <div className="col-5 col-lg-5">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>


                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p>${item.price}</p>
                                        </div>

                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <p>{item.quantity} Piece(s)</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <hr />
                        </div>
                        <div className="col-12 col-lg-3 mt-5">
                            <h4 className="my-4">Order Status</h4>
                            
                        </div>
                    </div>
                </Fragment>

            </div>
        </div>

    )
}