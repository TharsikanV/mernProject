import { Fragment, useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import {orderDetail as orderDetailAction,updateOrder} from "../../actions/orderActions";
import { toast } from "react-toastify";
import { clearOrderUpdated,clearError } from "../../slices/orderSlice";

export default function UpdateOrder() {
    const { id: orderId } = useParams();//id ah eduthiddam

    const { loading, isOrderUpdated, error,orderDetail} = useSelector(state => state.orderState);
    const {user={},orderItems=[],shippingInfo={},totalPrice=0,paymentInfo={}}=orderDetail;
    const isPaid=paymentInfo.status ==='succeeded'?true:false;
    const [orderStatus,setOrderStatus]=useState("Processing");


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
        const orderData={};

        orderData.orderStatus=orderStatus;
        
        dispatch(updateOrder(orderId,orderData))
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
                  
                </Fragment>

            </div>
        </div>

    )
}