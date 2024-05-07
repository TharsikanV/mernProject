import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom';
import Loader from

export default function ProtectedRoute({children}){
    const {isAuthenticated,loading}=useSelector(state=>state.authState)

    if(!isAuthenticated && !loading){
        return <Navigate to="/login"/>
    }

    if(isAuthenticated){
        return children;
    }
    if(loading){//request poidirukku
        return <Loader/>
    }
}