import { Fragment } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

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
                    field:'stock',
                    sort:'asc'
                },
                {
                    label:'Actions',
                    field:'actions',
                    sort:'asc'
                }
            ],
            rows:[]
        }
        products.forEach(product=>{
            data.rows.push({
                id:product._id,
                name:product.name,
                price:`$${product.price}`,
                stock:product.stock,
                actions:(
                    <Fragment>
                        <Link to={}></Link>
                    </Fragment>
                )
            })
        })
    }

    return(

    )
}