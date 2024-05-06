import { useState } from "react";

export default function Register() {
    const [userData,setUserData]=useState({
        name:"",
        email:"",
        password:""
    });

    const [avatar,setAvatar]=useState("");
    const [avatarPreview,setAvatarPreview]=useState("/images/default_avatar.png");

    const onChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" encType='multipart/form-data'>
                    <h1 className="mb-3">Register</h1>

                    <div className="form-group">
                        <label htmlFor="email_field">Name</label>
                        <input name="name" onChange={onChange} type="name" id="name_field" className="form-control" value="" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            name="email" 
                            onChange={onChange}
                            type="email"
                            id="email_field"
                            className="form-control"
                            value=""
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            name="password"
                            onChange={onChange}
                            type="password"
                            id="password_field"
                            className="form-control"
                            value=""
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='avatar_upload'>Avatar</label>
                        <div className='d-flex align-items-center'>
                            <div>
                                <figure className='avatar mr-3 item-rtl'>
                                    <img
                                        src={avatarPreview}
                                        className='rounded-circle'
                                        alt='image'
                                    />
                                </figure>
                            </div>
                            <div className='custom-file'>
                                <input
                                    type='file'
                                    name='avatar'
                                    on
                                    className='custom-file-input'
                                    id='customFile'
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    Choose Avatar
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        id="register_button"
                        type="submit"
                        className="btn btn-block py-3"
                    >
                        REGISTER
                    </button>
                </form>
            </div>
        </div>  
    )
}