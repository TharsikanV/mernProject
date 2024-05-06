import { useSelector } from "react-redux";

export default function ProtectedRoute({children}){
    const {isAuthenticated}=useSelector(state=>state.authState)

    
}