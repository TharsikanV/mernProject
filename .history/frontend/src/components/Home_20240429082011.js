import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" classN="container mt-5">
                <div classN="row">
                    <div classN="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div classN="card p-3 rounded">
                            <img
                                classN="card-img-top mx-auto"
                                src="./images/products/1.jpg"
                            />
                            <div classN="card-body d-flex flex-column">
                                <h5 classN="card-title">
                                    <a href="">OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers</a>
                                </h5>
                                <div classN="ratings mt-auto">
                                    <div classN="rating-outer">
                                        <div classN="rating-inner"></div>
                                    </div>
                                    <span id="no_of_reviews">(5 Reviews)</span>
                                </div>
                                <p classN="card-text">$245.67</p>
                                <a href="#" id="view_btn" classN="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div classN="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div classN="card p-3 rounded">
                            <img
                                classN="card-img-top mx-auto"
                                src="./images/products/2.jpg"
                            />
                            <div classN="card-body d-flex flex-column">
                                <h5 classN="card-title">
                                    <a href=""
                                    >WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant</a
                                    >
                                </h5>
                                <div classN="ratings mt-auto">
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star-half-o"></i>
                                    <i classN="fa fa-star-o"></i>
                                    <span id="no_of_reviews">(5 Reviews)</span>
                                </div>
                                <p classN="card-text">$150.32</p>
                                <a href="#" id="view_btn" classN="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div classN="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div classN="card p-3 rounded">
                            <img
                                classN="card-img-top mx-auto"
                                src="./images/products/3.jpg"
                            />
                            <div classN="card-body d-flex flex-column">
                                <h5 classN="card-title">
                                    <a href=""
                                    >Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB</a
                                    >
                                </h5>
                                <div classN="ratings mt-auto">
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star-half-o"></i>
                                    <i classN="fa fa-star-o"></i>
                                    <span id="no_of_reviews">(5 Reviews)</span>
                                </div>
                                <p classN="card-text">$440.57</p>
                                <a href="#" id="view_btn" classN="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div classN="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div classN="card p-3 rounded">
                            <img
                                classN="card-img-top mx-auto"
                                src="./images/products/4.jpg"
                            />
                            <div classN="card-body d-flex flex-column">
                                <h5 classN="card-title">
                                    <a href="">PTron Newly Launched Tangent Sports, 60Hrs Playtime</a>
                                </h5>
                                <div classN="ratings mt-auto">
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star-half-o"></i>
                                    <i classN="fa fa-star-o"></i>
                                    <span id="no_of_reviews">(5 Reviews)</span>
                                </div>
                                <p classN="card-text">$15.46</p>

                                <a type="button" href="#" id="view_btn" classN="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div classN="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div classN="card p-3 rounded">
                            <img
                                classN="card-img-top mx-auto"
                                src="./images/products/5.jpg"
                            />
                            <div classN="card-body d-flex flex-column">
                                <h5 classN="card-title">
                                    <a href="">Campus Men's Maxico Running Shoes</a>
                                </h5>
                                <div classN="ratings mt-auto">
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star"></i>
                                    <i classN="fa fa-star-half-o"></i>
                                    <i classN="fa fa-star-o"></i>
                                    <span id="no_of_reviews">(5 Reviews)</span>
                                </div>
                                <p classN="card-text">$10.12</p>
                                <a href="#" id="view_btn" classN="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}