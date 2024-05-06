import { Fragment, useEffect, useState } from 'react';
import MetaData from '../layouts/MetaData';
import { login } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import {}

export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const {loading,error}=useSelector(state=>state.authState);

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password))//login function action data ah kodukkum and dispatch function action data ah store kku anuppum and anka athukkeththa maariyaana redcer velayal nadakkum
    }

    useEffect(()=>{
        if(error){

        }
    },[error])

    return (
        <Fragment>
            <MetaData title={`Login`}/>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form onSubmit={submitHandler} className="shadow-lg">
                        <h1 className="mb-3">Login</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div>

                        <a href="#" className="float-right mb-4">Forgot Password?</a>

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading}
                        >
                            LOGIN
                        </button>

                        <a href="#" className="float-right mt-3">New User?</a>
                    </form>
                </div>
            </div>
        </Fragment>

    )
}