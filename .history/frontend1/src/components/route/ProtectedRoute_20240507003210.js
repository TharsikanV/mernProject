import { useSelector } from "react-redux";
import {Navigate} from 'react-router'

export default function ProtectedRoute({children}){
    const {isAuthenticated}=useSelector(state=>state.authState)

    if(!isAuthenticated){
        return <Navigate/>
    }
}