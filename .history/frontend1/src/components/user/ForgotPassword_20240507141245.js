export default function ForgotPassword(){
    return(
        <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg">
                        <h1 className="mb-3">Forgot Password</h1>
                        <div className="form-group">
                            <label htmlor="email_field">Enter Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value=''
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