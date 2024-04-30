import { Fragment, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsActions";

export default function Home() {
    const dispatch=useDispatch();
    const {products,loading}=useSelector((state)=>state.productsState)//statela irunthu products ah eduthiddam
    
    useEffect(()=>{
        dispatch(getProducts)
    },[])
    return (
        <Fragment>

        </Fragment>
       
    )
}