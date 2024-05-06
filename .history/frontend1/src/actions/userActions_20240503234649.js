//slice.js---->actions.js beacause actions ah export panniddam
import {loginRequest} 

export const login =(email,password)=> async (dispatch)=>{
    try{
        dispatch(loginRequest)
    }catch(error){

    }
}