import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom';

export default function ProtectedRoute({children}){
    const {isAuthenticated,load}=useSelector(state=>state.authState)

    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }
    return children;
}