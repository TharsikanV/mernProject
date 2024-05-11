import { useSelector } from "react-redux"

export default function ProductList(){
    const {products=[],loading=true,error}=useSelector(state=>state.productsState)

    
    return(

    )
}