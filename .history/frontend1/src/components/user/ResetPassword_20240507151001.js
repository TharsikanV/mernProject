export default function ResetPassword(){
    return(
        <div classNam="row wrapper">
            <div classNam="col-10 col-lg-5">
                <form classNam="shadow-lg">
                    <h1 classNam="mb-3">New Password</h1>

                    <div classNam="form-group">
                        <label for="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            classNam="form-control"
                            value=''
                        />
                    </div>

                    <div classNam="form-group">
                        <label for="confirm_password_field">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm_password_field"
                            classNam="form-control"
                            value=''
                        />
                    </div>

                    <button
                        id="new_password_button"
                        type="submit"
                        classNam="btn btn-block py-3">
                        Set Password
                    </button>

                </form>
            </div>
        </div>
    )
}