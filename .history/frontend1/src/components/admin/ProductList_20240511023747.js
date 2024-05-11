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
                        <Link to={`/admin/product/${product._id}`} className="btn btn-primary"><i className="fa fa-pencil"></i></Link>
                        <Button className>
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Fragment>
                )
            })
        })
    }

    return(

    )
}