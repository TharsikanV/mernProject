import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom';
import Loader from '../layouts/Loader';

export default function ProtectedRoute({children,isAdmin}){
    const {isAuthenticated,loading}=useSelector(state=>state.authState)

    if(!isAuthenticated && !loading){
        return <Navigate to="/login"/>
    }

    if(isAuthenticated){
        if(isAdmin===true && UserActivation.role !=='admin'){

        }
        return children;
    }
    if(loading){//request poidirukku
        return <Loader/>
    }
}