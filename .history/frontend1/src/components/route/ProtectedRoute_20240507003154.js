import { useSelector } from "react-redux";
import {Nav}

export default function ProtectedRoute({children}){
    const {isAuthenticated}=useSelector(state=>state.authState)

    if(!isAuthenticated){
        return <Navigate/>
    }
}