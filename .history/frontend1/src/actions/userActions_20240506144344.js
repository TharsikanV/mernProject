//slice.js---->actions.js beacause actions ah export panniddam
import {
    clearError, 
    loadUserRequest, 
    loginFail, 
    loginRequest, 
    loginSuccess, 
    registerFail, 
    registerRequest, 
    registerSuccess
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
        

        const {data}=await axios.post(`/api/v1/register`,userData,config);
        dispatch(registerSuccess(data))
    }catch(error){
        dispatch(registerFail(error.response.data.message))
    }
}