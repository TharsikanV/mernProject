export default function ResetPassword(){
    return(
        <div class="row wrapper">
            <div class="col-10 col-lg-5">
                <form class="shadow-lg">
                    <h1 class="mb-3">New Password</h1>

                    <div class="form-group">
                        <label for="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            class="form-control"
                            value=''
                        />
                    </div>

                    <div class="form-group">
                        <label for="confirm_password_field">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm_password_field"
                            class="form-control"
                            value=''
                        />
                    </div>

                    <button
                        id="new_password_button"
                        type="submit"
                        class="btn btn-block py-3">
                        Set Password
                    </button>

                </form>
            </div>
        </div>
    )
}