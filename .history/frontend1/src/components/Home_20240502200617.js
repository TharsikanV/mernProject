import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsActions";
import Loader from "./layouts/Loader";
import Product from "./product/product";
import {toast} from "react-toastify";
import Pagination

export default function Home() {
    const dispatch = useDispatch();
    const { products, loading,error} = useSelector((state) => state.productsState)//statela irunthu products data ah eduthiddam

    useEffect(() => {
        if(error){
            return toast.error(error,{//error irunthadispatch(getProducts) itha call pannakoodathu
                // position:toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts)
    }, [error,dispatch])
    return (
        <Fragment>
            {loading ? <Loader/> :
                <Fragment>
                    <MetaData title={'Buy Best Products'} />

                    <h1 id="products_heading">Latest Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product}/>
                            ))}

                        </div>
                    </section>
                </Fragment>
            }
        </Fragment>

    )
}