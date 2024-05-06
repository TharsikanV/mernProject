//slice.js---->actions.js beacause actions ah export panniddam
import {loginRequest} from '../slices'

export const login =(email,password)=> async (dispatch)=>{
    try{
        dispatch(loginRequest)
    }catch(error){

    }
}