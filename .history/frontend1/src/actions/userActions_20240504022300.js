//slice.js---->actions.js beacause actions ah export panniddam
import {clearError, loginFail, loginRequest, loginSuccess, registerRequest} from '../slices/authSlice';
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
        const config={
            headers:{
                'content-type':'multipart/form-data'
            }
        }


        const {data}=await axios.post(`/api/v1/register`,userData);
        dispatch(loginSuccess(data))
    }catch(error){
        dispatch(loginFail(error.response.data.message))
    }
}