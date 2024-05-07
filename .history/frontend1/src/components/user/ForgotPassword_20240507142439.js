import { useState } from "react"
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../actions/userActions";

export default function ForgotPassword() {
    const [email,setEmail]=useState("");
    const dispatch=useDispatch();
    const {}

    const submitHandler=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('email',email);
        dispatch(forgotPassword(formData))

    }

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-3">Forgot Password</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Enter Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        id="forgot_password_button"
                        type="submit"
                        className="btn btn-block py-3">
                        Send Email
                    </button>

                </form>
            </div>
        </div>

    )
}