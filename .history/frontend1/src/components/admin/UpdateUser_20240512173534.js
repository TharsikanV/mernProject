import { Fragment, useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../actions/userActions";
import { clearError, clearUserUpdated } from "../../slices/userSlice";
import { toast } from "react-toastify";

export default function UpdateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    
    const { id:userId } = useParams();//id ah eduthiddam

    const { loading, isUserUpdated, error,user} = useSelector(state => state.userState);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email',email);
        formData.append('role',role);

        dispatch(updateUser(userId, formData))
    }

    useEffect(() => {
        if (isUserUpdated) {
            toast('User Updated successfully', {
                type: 'success',
                // position:toast.POSITION.BOTTOM_CENTER
                onOpen: () => dispatch(clearUserUpdated())
            })
            return;
        }

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

        dispatch(getUser(userId))
    }, [isUserUpdated, error, dispatch])

    useEffect(() => {//ithu ethukku enda user ooda datas ah form la kondanthu vaikkanum
        if (user._id) {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role);
        }
    }, [user])//component load aana udana data kidachiraathu api request ponapirakuthaan data kidaikkum

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="wrapper my-5">
                        <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
                            <h1 className="mb-4">Update User</h1>

                            <div className="form-group">
                                <label htmlFor="name_field">Name</label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className="form-control"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Email</label>
                                <input
                                    type="text"
                                    id="price_field"
                                    className="form-control"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category_field">Role</label>
                                <select value={category} onChange={e => setCategory(e.target.value)} className="form-control" id="category_field">

                                    <option value="">Select</option>
                                    <option value="">Select</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock_field">Stock</label>
                                <input
                                    type="number"
                                    id="stock_field"
                                    className="form-control"
                                    onChange={e => setStock(e.target.value)}
                                    value={stock}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="seller_field">Seller Name</label>
                                <input
                                    type="text"
                                    id="seller_field"
                                    className="form-control"
                                    onChange={e => setSeller(e.target.value)}
                                    value={seller}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Images</label>

                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='product_images'
                                        className='custom-file-input'
                                        id='customFile'
                                        multiple
                                        onChange={onImagesChange}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Images
                                    </label>
                                </div>
                                {imagesPreview.length > 0 && <span className="mr-2" onClick={clearImagesHandler} style={{ cursor: "pointer" }}><i className="fa fa-trash"></i></span>}
                                {imagesPreview.map(image => (
                                    <img
                                        className="mt-3 mr-2"
                                        key={image}
                                        src={image}
                                        alt={`Image Preview`}
                                        width="55"
                                        height="52"
                                    />
                                ))}
                            </div>


                            <button
                                id="login_button"
                                type="submit"
                                disabled={loading}
                                className="btn btn-block py-3"
                            >
                                UPDATE
                            </button>

                        </form>
                    </div>
                </Fragment>

            </div>
        </div>

    )
}