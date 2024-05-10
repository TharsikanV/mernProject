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
            
        </Fragment>
       

    )
}