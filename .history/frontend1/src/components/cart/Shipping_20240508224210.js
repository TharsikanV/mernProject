import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { countries } from 'countries-list';
import {saveShippingInfo} from "../../slices/cartSlice";
import {useNavigate} from "react-router-dom";
import CheckoutSteps from "./CheckoutStep";

export default function Shipping() {
    const { shippingInfo } = useSelector(state => state.cartState)

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
    const [country, setCountry] = useState(shippingInfo.country);
    const [state, setState] = useState(shippingInfo.state);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const countryList = Object.values(countries);//values ah maddum edukkum

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShippingInfo({address,city,phoneNo,postalCode,country,state}))//payload data anuppanum
        navigate('/order/confirm');
    }

    return (
        <Fragment>

        </Fragment>
       
    )
}