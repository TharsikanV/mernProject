import { useSelector } from "react-redux"

export default function ProductList(){
    const {products=[],loading=true,error}=useSelector(state=>state.productsState)

    const setProducts=()=>{
        const data={
            colums:[
                {
                    label:'ID',
                    field:'id',
                    sort:'asc'
                },
                {
                    label:'Name',
                    field:'name',
                    sort:'asc'
                },
                {
                    label:'Price',
                    field:'price',
                    sort:'asc'
                },
                {
                    label:'Stock',
                    field:'id',
                    sort:'asc'
                }
            ]
        }
    }

    return(

    )
}