//slice.js---->actions.js beacause actions ah export panniddam
import {
    clearError, 
    loadUserFail, 
    loadUserRequest, 
    loadUserSuccess, 
    loginFail, 
    loginRequest, 
    loginSuccess, 
    logoutFail, 
    logoutSuccess, 
    registerFail, 
    registerRequest, 
    registerSuccess,
    updatePasswordFail,
    updatePasswordRequest,
    updatePasswordSuccess,
    updateProfileFail,
    updateProfileRequest,
    updateProfileSuccess
} from '../slices/authSlice';
import axios from 'axios';

export const login =(email,password)=> async (dispatch)=>{
    try{
        dispatch(loginRequest())

        const {data}=await axios.post(`/api/v1/login`,{email,password});
        dispatch(loginSuccess(data))
    }catch(error){
        dispatch(loginFail(error.response.data.message))
    }
}

export const clearAuthError=(dispatch)=>{
    dispatch(clearError())
}

export const register =(userData)=> async (dispatch)=>{
    try{
        dispatch(registerRequest())
        
        //requestkkaana content type ah maathavendi irukku 
        //because image um varum endrathaala
        const config={
            headers:{
                'Content-type':'multipart/form-data'
            }
        }


        const {data}=await axios.post(`/api/v1/register`,userData,config);
        dispatch(registerSuccess(data))
    }catch(error){
        dispatch(registerFail(error.response.data.message))
    }
}

export const loadUser =async (dispatch)=>{
    try{
        dispatch(loadUserRequest())
        
        const {data}=await axios.get(`/api/v1/myprofile`);
        dispatch(loadUserSuccess(data))
    }catch(error){
        dispatch(loadUserFail(error.response.data.message))
    }
}//ithu eppavum nadkkanum endrathaala app.js la kodukkanum

export const logout =async (dispatch)=>{
    try{
        await axios.get(`/api/v1/logout`);
        dispatch(logoutSuccess())
    }catch(error){
        dispatch(logoutFail)
    }
}//ithu eppavum nadkkanum endrathaala app.js la kodukkanum

export const updateProfile=(userData)=> async (dispatch)=>{
    try{
        dispatch(updateProfileRequest())
        
        //requestkkaana content type ah maathavendi irukku 
        //because image um varum endrathaala
        const config={
            headers:{
                'Content-type':'multipart/form-data'
            }
        }


        const {data}=await axios.put(`/api/v1/update`,userData,config);
        dispatch(updateProfileSuccess(data))
    }catch(error){
        dispatch(updateProfileFail(error.response.data.message))
    }
}

export const updatePassword=(formData)=> async (dispatch)=>{
    try{
        dispatch(updatePasswordRequest())
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        await axios.put(`/api/v1/password/change`,formData,config);
        dispatch(updatePasswordSuccess())
    }catch(error){
        dispatch(updatePasswordFail(error.response.data.message))
    }
}

export const forPassword=(formData)=> async (dispatch)=>{
    try{
        dispatch(updatePasswordRequest())
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        await axios.put(`/api/v1/password/change`,formData,config);
        dispatch(updatePasswordSuccess())
    }catch(error){
        dispatch(updatePasswordFail(error.response.data.message))
    }
}