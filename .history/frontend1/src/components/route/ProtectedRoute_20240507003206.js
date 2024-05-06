import { useSelector } from "react-redux";
import {Navigate} from 'react'

export default function ProtectedRoute({children}){
    const {isAuthenticated}=useSelector(state=>state.authState)

    if(!isAuthenticated){
        return <Navigate/>
    }
}