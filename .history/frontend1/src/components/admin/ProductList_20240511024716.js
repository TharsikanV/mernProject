import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clearError } from "../../slices/productsSlice"
import { getAdminProducts } from "../../actions/productActions"
import Sidebar from "./Sidebar"

export default function ProductList(){
    const {products=[],loading=true,error}=useSelector(state=>state.productsState)
    const dispatch=useDispatch();

    const setProducts=()=>{
        const data={
            colums:[
                {
                    label:'ID',
                    field:'id',
                    sort:'asc'
                },
                {
                    label:'Name',
                    field:'name',
                    sort:'asc'
                },
                {
                    label:'Price',
                    field:'price',
                    sort:'asc'
                },
                {
                    label:'Stock',
                    field:'stock',
                    sort:'asc'
                },
                {
                    label:'Actions',
                    field:'actions',
                    sort:'asc'
                }
            ],
            rows:[]
        }
        products.forEach(product=>{
            data.rows.push({
                id:product._id,
                name:product.name,
                price:`$${product.price}`,
                stock:product.stock,
                actions:(
                    <Fragment>
                        <Link to={`/admin/product/${product._id}`} className="btn btn-primary"><i className="fa fa-pencil"></i></Link>
                        <Button className="btn btn-danger py-1 px-2 ml-2">
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Fragment>
                )
            })
        })
        return data;
    }

    useEffect(()=>{
        if (error) {

            toast(error, {
                // position:toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => {//toaster vara error ah null aakkanum
                    dispatch(clearError())
                }
            })
            return
        }
        dispatch(getAdminProducts)

    },[dispatch,error])
    return(
        <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar/>
        </div>
        <div className="col-12 col-md-10">
            <h1 className="my-4">Dashboard</h1>
            <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                    <div className="card text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                            <div className="text-center card-font-size">Total Amount<br /> <b>$3425</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pr-4">
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                            <div className="text-center card-font-size">Products<br /> <b>{products.length}</b></div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" to="/admin/products">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>


                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                            <div className="text-center card-font-size">Orders<br /> <b>345</b></div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" to="/admin/orders">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>


                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-info o-hidden h-100">
                        <div className="card-body">
                            <div className="text-center card-font-size">Users<br /> <b>55</b></div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="/admin/users">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>


                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                            <div className="text-center card-font-size">Out of Stock<br /> <b>{outOfStock}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}