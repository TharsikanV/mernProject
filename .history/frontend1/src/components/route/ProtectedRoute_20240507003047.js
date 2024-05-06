import { useSelector } from "react-redux";

export default function ProtectedRoute({children}){
    const {isAuthent}=useSelector(state=>state.authState)
}