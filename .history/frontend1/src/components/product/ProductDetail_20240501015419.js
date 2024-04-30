import { Fragment, useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
    const {loading,product}=useSelector((state)=>state.productState);
    const dispatch=useDispatch();
    const{id}=useParams()
    useEffect(()=>{
        dispatch(getProduct(id))
    },[])//component load aaki mudichathum orukka load aakum

    return (
        <Fragment>

        </Fragment>
       

    )
}