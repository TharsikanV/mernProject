import { Fragment } from "react";
import { useSelector } from 'react-redux';
export default function Cart() {
    const { items } = useSelector(state => state.cartState)

    return (
        <Fragment>
            {items.length == 0 ?
                <h2 className="mt-5">Your Cart is Empty</h2> :
                <Fragment>

                </Fragment>
            }
               
                </Fragment>

    )
}