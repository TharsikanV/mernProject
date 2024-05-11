import { useSelector } from "react-redux"

export default function ProductList(){
    const {products,loading,error}=useSelector(state=>state.productsState)
    return(

    )
}