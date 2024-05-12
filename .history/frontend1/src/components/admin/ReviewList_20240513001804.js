import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import Loader from '../layouts/Loader';
import { MDBDataTable } from 'mdbreact';
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import { clearError, clearUserDeleted } from "../../slices/userSlice"
import { deleteUser,getUsers} from "../../actions/userActions"

export default function ReviewList() {
    const {reviews = [], loading = true, error,isReviewDeleted} = useSelector(state => state.productState)
    const dispatch = useDispatch();

    const setReviews = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Rating',
                    field: 'rating',
                    sort: 'asc'
                },
                {
                    label: 'User',
                    field: 'user',
                    sort: 'asc'
                },
                {
                    label: 'Comment',
                    field: 'comment',
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
        reviews.forEach(review => {
            data.rows.push({
                id:review._id,
                rating:review.rating,
                user:review.user.name,
                comment:review.comment,
                actions: (
                    <Fragment>
                        <Button onClick={e=>deleteHandler(e,review._id)} className="btn btn-danger py-1 px-2 ml-2">
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
        dispatch(dele(id))
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

        if (isUserDeleted) {
            toast('User Deleted successfully',{
                type:'success',
                // position:toast.POSITION.BOTTOM_CENTER
                onOpen:()=>dispatch(clearUserDeleted())
            })
            return;
        }
        dispatch(getUsers)

    }, [dispatch, error,isUserDeleted])
    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar/>
            </div>
            <div className="col-12 col-md-10">
                <h1 className="my-4">User List</h1>
                <Fragment>
                    {loading ?
                        <Loader /> :
                        <MDBDataTable
                            data={setUsers()}
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