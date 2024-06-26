export default function Login() {
    return (
        <div class="row wrapper">
            <div class="col-10 col-lg-5">
                <form class="shadow-lg">
                    <h1 class="mb-3">Login</h1>
                    <div class="form-group">
                        <label for="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            class="form-control"
                            value=""
                        />
                    </div>

                    <div class="form-group">
                        <label for="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            class="form-control"
                            value=""
                        />
                    </div>

                    <a href="#" class="float-right mb-4">Forgot Password?</a>

                    <button
                        id="login_button"
                        type="submit"
                        class="btn btn-block py-3"
                    >
                        LOGIN
                    </button>

                    <a href="#" class="float-right mt-3">New User?</a>
                </form>
            </div>
        </div
            )
}