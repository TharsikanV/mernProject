export default function Register() {
    return (
        <div "row wrapper">
            <div "col-10 col-lg-5">
                <form "shadow-lg" encType='multipart/form-data'>
                    <h1 "mb-3">Register</h1>

                    <div "form-group">
                        <label for="email_field">Name</label>
                        <input type="name" id="name_field" "form-control" value="" />
                    </div>

                    <div "form-group">
                        <label for="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            "form-control"
                            value=""
                        />
                    </div>

                    <div "form-group">
                        <label for="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            "form-control"
                            value=""
                        />
                    </div>

                    <div 'form-group'>
                        <label for='avatar_upload'>Avatar</label>
                        <div 'd-flex align-items-center'>
                            <div>
                                <figure 'avatar mr-3 item-rtl'>
                                    <img
                                        src="./images/profile.jpg"
                                        'rounded-circle'
                                        alt='image'
                                    />
                                </figure>
                            </div>
                            <div 'custom-file'>
                                <input
                                    type='file'
                                    name='avatar'
                                    'custom-file-input'
                                    id='customFile'
                                />
                                <label 'custom-file-label' for='customFile'>
                                    Choose Avatar
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        id="register_button"
                        type="submit"
                        "btn btn-block py-3"
                    >
                        REGISTER
                    </button>
                </form>
            </div>
        </div>  
    )
}