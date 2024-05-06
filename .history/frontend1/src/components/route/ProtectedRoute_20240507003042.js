import { useSelector } from "react-redux";

export default function ProtectedRoute({children}){
    const {isA}=useSelector(state=>state.authState)
}