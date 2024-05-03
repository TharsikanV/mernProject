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
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export default function ProductSearch() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)//statela irunthu products data ah eduthiddam
    const [currentPage, setCurrentPage] = useState(1);//paginationkaaka
    const [price, setPrice] = useState([1,1000]);
    const [priceChanged, setPriceChanged] = useState(price);
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
        dispatch(getProducts(keyword,price,currentPage))
    }, [error, dispatch, currentPage, keyword,priceChanged])//price kku pathila priceChanged ah koduthaa adikkadi slider maara maara load aakirathu thadukkapadum
    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Buy Best Products'} />

                    <h1 id="products_heading">Search Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            <div className="col-6 col-md-3 mb-5 mt-5">
                                {/**Price Filter */}
                                <div className="px-5" onMouseUp={()=>setPriceChanged(price)}>{/**mouse ah vidum pothuthaan avathaanikkanum */}
                                    <Slider
                                        range={true}//itha oru range slider ah maathum
                                        marks={
                                            {
                                                1:"$1",
                                                1000:"$1000"
                                            }
                                        }
                                        min={1}
                                        max={1000}
                                        defaultValue={price}
                                        onChange={(price)=>{
                                            setPrice(price)
                                        }}
                                        handleRender={
                                            renderProps=>{
                                                return(
                                                    <Tooltip overlay={`$${renderProps.props['aria-valuenow']}`}>
                                                        <div {...renderProps.props}></div>
                                                    </Tooltip>//ithukkulla irukkira ellaame div ooda properties ah konduvarapadum
                                                )
                                            }
                                        }
                                    />
                                </div>
                                <hr className="my-5"/>
                                {/**Category Filter */}
                                <div className="mt-5">
                                    <h3 className="mb-3">Categories</h3>
                                    <ul className="pl-0">
                                        <li
                                        style={{
                                            cursor
                                        }}
                                        ></li>
                                    </ul>
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