import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clearError } from "../../slices/productsSlice"
import Sidebar from "./Sidebar"
import Loader from '../layouts/Loader';
import { MDBDataTable } from 'mdbreact';
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import { clearError, clearOrderDeleted } from "../../slices/orderSlice"
import { deleteOrder,adminOrders as adminOrders} from "../../actions/orderActions"

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
                status: <p style={{color:order.orderStatus.includes('Processing')?'green':'red'}}>{order.orderStatus}</p>,
                actions: (
                    <Fragment>
                        <Link to={`/admin/order/${order._id}`} className="btn btn-primary"><i className="fa fa-pencil"></i></Link>
                        <Button onClick={e=>deleteHandler(e,order._id)} className="btn btn-danger py-1 px-2 ml-2">
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
        dispatch(deleteOrder(id))
    }
    
    useEffect(() => {
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

        if (isOrderDeleted) {
            toast('Order Deleted successfully',{
                type:'success',
                // position:toast.POSITION.BOTTOM_CENTER
                onOpen:()=>dispatch(clearOrderDeleted())
            })
            return;
        }

        dispatch(adminOrders)

    }, [dispatch, error,isOrderDeleted])
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