import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsActions";
import Loader from "./layouts/Loader";
import Product from "./product/product";
import {toast} from "react-toastify";
import Pagination from 'react-js-pagination';

export default function Home() {
    const dispatch = useDispatch();
    const { products, loading,error,productsCount,resPerPage} = useSelector((state) => state.productsState)//statela irunthu products data ah eduthiddam
    const [currentPage,setCurrentPage]=useState(1);//paginationkaaka

    const setCurrentPageNo=(pageNo)=>{
        setCurrentPage(pageNo)

    }

    useEffect(() => {
        if(error){
            return toast.error(error,{//error irunthadispatch(getProducts) itha call pannakoodathu
                // position:toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null,))
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
                                <Product col={3} key={product._id} product={product}/>
                            ))}

                        </div>
                    </section>
                    {productsCount>0 && productsCount>resPerPage?//startla value irukaathuthaan
                    <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}//current pagela irukkama illaya endratha entha value adipadaila kodukkirathu endurathukku
                                onChange={setCurrentPageNo}
                                totalItemsCount={productsCount}//moththa products count
                                itemsCountPerPage={resPerPage}
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                prevPageText={'Previus'}
                                itemClass={'page-item'}//ithu bootstap ooda class for style kku
                                linkClass={'page-link'}//ithu bootstap ooda class for style kku
                            />
                    </div>:null
                    }
                </Fragment>
            }
        </Fragment>

    )
}