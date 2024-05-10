import Sidebar from "./Sidebar";

export default function Dashboard() {
    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <h1 classNa="my-4">Dashboard</h1>
                <div classNa="row pr-4">
                    <div classNa="col-xl-12 col-sm-12 mb-3">
                        <div classNa="card text-white bg-primary o-hidden h-100">
                            <div classNa="card-body">
                                <div classNa="text-center card-font-size">Total Amount<br /> <b>$3425</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div classNa="row pr-4">
                    <div classNa="col-xl-3 col-sm-6 mb-3">
                        <div classNa="card text-white bg-success o-hidden h-100">
                            <div classNa="card-body">
                                <div classNa="text-center card-font-size">Products<br /> <b>23</b></div>
                            </div>
                            <a classNa="card-footer text-white clearfix small z-1" to="/admin/products">
                                <span classNa="float-left">View Details</span>
                                <span classNa="float-right">
                                    <i classNa="fa fa-angle-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>


                    <div classNa="col-xl-3 col-sm-6 mb-3">
                        <div classNa="card text-white bg-danger o-hidden h-100">
                            <div classNa="card-body">
                                <div classNa="text-center card-font-size">Orders<br /> <b>345</b></div>
                            </div>
                            <a classNa="card-footer text-white clearfix small z-1" to="/admin/orders">
                                <span classNa="float-left">View Details</span>
                                <span classNa="float-right">
                                    <i classNa="fa fa-angle-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>


                    <div classNa="col-xl-3 col-sm-6 mb-3">
                        <div classNa="card text-white bg-info o-hidden h-100">
                            <div classNa="card-body">
                                <div classNa="text-center card-font-size">Users<br /> <b>55</b></div>
                            </div>
                            <a classNa="card-footer text-white clearfix small z-1" href="/admin/users">
                                <span classNa="float-left">View Details</span>
                                <span classNa="float-right">
                                    <i classNa="fa fa-angle-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>


                    <div classNa="col-xl-3 col-sm-6 mb-3">
                        <div classNa="card text-white bg-warning o-hidden h-100">
                            <div classNa="card-body">
                                <div classNa="text-center card-font-size">Out of Stock<br /> <b>10</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}