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
        if(e.target.name==='avatar'){
            const reader=new FileReader;
            //naama use pannira entha oru file oda data ah eduththu vaikkiratrhuthaan athooda vela

            reader.onload=()=>{//eppa url ah irunthu read panni mudichutho intha function call seyya padanum
                if(reader.readyState===2){//read panni mudichitha illaya endratha therivikkira field ah irukkum(2 means file read mulumaya mudinchithu)
                    setAvatarPreview(reader.result);//ithukka thaan file ooda url kidaikkum
                    setAvatar(e.target.files[0])
                }
            }

            reader.readAsDataURL(e.target.files[0])
            //nama usepannira file ah intha oru property la irunthu eduthikkidu athooda data ah URL ah maathirathuthaan ithoda vela
            //single file ah edukkirathaala 0 position la thaan irukkum
        }
        else{
            setUserData({
                ...userData,
                [e.target.name]:e.target.value
            })
        }
        
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const formData=-new FormData();
        formData.append()
    }

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
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
                                    onChange={onChange}
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