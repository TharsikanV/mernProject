import { useSelector } from "react-redux";

export default function ProtectedRoute({children}){
    const {}=useSelector(state=>state.authState)
}