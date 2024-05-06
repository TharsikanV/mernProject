import { useSelector } from "react-redux";

export default function ProtectedRoute({children}){
    const {isAuthe}=useSelector(state=>state.authState)
}