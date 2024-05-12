import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clearError } from "../../slices/productsSlice"
import { deleteProduct, getAdminProducts } from "../../actions/productActions"
import Sidebar from "./Sidebar"
import Loader from '../layouts/Loader';
import { MDBDataTable } from 'mdbreact';
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import { clearProductDeleted } from "../../slices/productSlice"

export default function OrderList() {
    const {adminOrders = [], loading = true, error,isOrderDeleted} = useSelector(state => state.orderState)
    const dispatch = useDispatch();

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Number Of Items',
                    field: 'noOfItems',
                    sort: 'asc'
                },
                {
                    label: 'Amount',
                    field: 'amount',
                    sort: 'asc'
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }
            ],
            rows: []
        }
        adminOrders.forEach(order => {
            data.rows.push({
                id: order._id,
                noOfItems:order.orderItems.length,
                amount: `$${order.totalPrice}`,
                status: <p style={{color}}>{order.orderStatus}</p>,
                actions: (
                    <Fragment>
                        <Link to={`/admin/product/${product._id}`} className="btn btn-primary"><i className="fa fa-pencil"></i></Link>
                        <Button onClick={e=>deleteHandler(e,product._id)} className="btn btn-danger py-1 px-2 ml-2">
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Fragment>
                )
            })
        })
        return data;
    }

    const deleteHandler=(e,id)=>{
        e.target.disabled=true;//orukka click panna piraku click panna mudiyaathu
        dispatch(deleteProduct(id))
    }
    
    useEffect(() => {
        if (error ||productError) {

            toast(error ||productError, {
                // position:toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => {//toaster vara error ah null aakkanum
                    dispatch(clearError())
                }
            })
            return
        }

        if (isProductDeleted) {
            toast('Product Deleted successfully',{
                type:'success',
                // position:toast.POSITION.BOTTOM_CENTER
                onOpen:()=>dispatch(clearProductDeleted())
            })
            return;
        }

        dispatch(getAdminProducts)

    }, [dispatch, error,isProductDeleted])
    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <h1 className="my-4">Product List</h1>
                <Fragment>
                    {loading ?
                        <Loader /> :
                        <MDBDataTable
                            data={setProducts()}
                            bordered
                            striped
                            hover
                            className="px-3"
                        />
                    }
                </Fragment>

            </div>
        </div>
    )
}