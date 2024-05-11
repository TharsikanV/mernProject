import { useSelector } from "react-redux"

export default function ProductList(){
    const {products=[],loading=tr,error}=useSelector(state=>state.productsState)
    return(

    )
}