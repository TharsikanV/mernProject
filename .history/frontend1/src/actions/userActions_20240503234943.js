//slice.js---->actions.js beacause actions ah export panniddam
import {loginRequest} from '../slices/authSlice';
import axios from 'ax'

export const login =(email,password)=> async (dispatch)=>{
    try{
        dispatch(loginRequest())

        await ax
    }catch(error){

    }
}