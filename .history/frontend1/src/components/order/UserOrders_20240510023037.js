import {Fragment} from 'react';
import MetaData from '../layouts/MetaData';
import{MDBDetaTable} from 'mdbreact';

export default function userOrders(){
    const setOrders=()=>{
        const data={
            columns:[
                {
                    label:"Order ID",
                    
                }
            ]
        }
    }

    return(
        <Fragment>
            <MetaData title="My Orders"/>
            <h1 className='mt-5'>My Orders</h1>
            <MDBDetaTable
                className='px-3'//positionx 3
                bordered
                striped //onnuvidda row black ah theriyum
                hover //mouse over pannum pothu antha row highlight aakum
                data={}
            />

        </Fragment>
    )
}