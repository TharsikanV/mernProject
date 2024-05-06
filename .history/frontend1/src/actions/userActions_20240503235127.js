//slice.js---->actions.js beacause actions ah export panniddam
import {loginRequest} from '../slices/authSlice';
import axios from 'axios';

export const login =(email,password)=> async (dispatch)=>{
    try{
        dispatch(loginRequest())

        await axios.post(`/api/v1/login`,{e})
    }catch(error){

    }
}