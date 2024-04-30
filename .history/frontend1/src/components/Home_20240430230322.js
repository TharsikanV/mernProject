import { Fragment, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsActions";

export default function Home() {
    const dispatch=useDispatch();
    useSelector((state)=>state.)
    useEffect(()=>{
        dispatch(getProducts)
    },[])
    return (
        <Fragment>
            <MetaData title={'Buy Best Products'}/>
            
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src="./images/products/1.jpg"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="">OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers</a>
                                </h5>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="no_of_reviews">(5 Reviews)</span>
                                </div>
                                <p className="card-text">$245.67</p>
                                <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}