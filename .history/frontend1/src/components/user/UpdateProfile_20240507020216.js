import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "../../actions/userActions";

export default function UpdateProfile() {
    const {loading,error,user,isUpdated}=useSelector(state=>state.authState);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [avatar,setAvatar]=useState("");
    const [avatarPreview,setAvatarPreview]=useState("/images/default_avatar.png");
    const dispatch=useDispatch();

    const onChangeAvatar=(e)=>{
        const reader=new FileReader();
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

    const submitHandler=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name)
        formData.append('email',email)
        formData.append('avatar',avatar)
        //ella input data ayum formData kku koduthachu

        dispatch(updateProfile(formData))
    }

    useEffect(()=>{
        if(user){
            setName(user.name);
            setEmail(user.email);
            if(user.avatar){
                setAvatar
            }
        }
    })

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
                    <h1 className="mt-2 mb-5">Update Profile</h1>

                    <div className="form-group">
                        <label htmlFor="email_field">Name</label>
                        <input
                            type="name"
                            id="name_field"
                            className="form-control"
                            name='name'
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            name='email'
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='avatar_upload'>Avatar</label>
                        <div className='d-flex align-items-center'>
                            <div>
                                <figure className='avatar mr-3 item-rtl'>
                                    <img
                                        src='./images/profile.jpg'
                                        className='rounded-circle'
                                        alt='Avatar Preview'
                                    />
                                </figure>
                            </div>
                            <div className='custom-file'>
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    onChange={onChangeAvatar}
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    Choose Avatar
                                </label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Update</button>
                </form>
            </div>
        </div>
    )
}