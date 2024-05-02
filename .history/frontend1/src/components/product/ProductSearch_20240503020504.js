import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from ".././layouts/MetaData";
import { getProducts } from "../../actions/productsActions";
import Loader from ".././layouts/Loader";
import Product from ".././product/product";
import { toast } from "react-toastify";
import Pagination from 'react-js-pagination';
import { useParams } from "react-router-dom";
import Slider from "rc-slider";//slider
import 'rc-slider/assets/index.css';//sliderta stylekku

export default function ProductSearch() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)//statela irunthu products data ah eduthiddam
    const [currentPage, setCurrentPage] = useState(1);//paginationkaaka
    const { keyword } = useParams();
    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo)

    }

    useEffect(() => {
        if (error) {
            return toast.error(error, {//error irunthadispatch(getProducts) itha call pannakoodathu
                // position:toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(keyword, currentPage))
    }, [error, dispatch, currentPage, keyword])
    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Buy Best Products'} />

                    <h1 id="products_heading">Search Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            <div className="col-6 col-md-3 mb-5 mt-5">
                                <div className="px-5">
                                    <
                                </div>
                            </div>
                            <div className="col-6 col-md-9">
                                <div className="row">
                                    {products && products.map(product => (
                                        <Product col={4} key={product._id} product={product} />
                                    ))}
                                </div>
                            </div>


                        </div>
                    </section>
                    {productsCount > 0 && productsCount > resPerPage ?//startla value irukaathuthaan
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
                        </div> : null
                    }
                </Fragment>
            }
        </Fragment>

    )
}