import {Fragment} from 'react';
import MetaData from '../layouts/MetaData';
import{MDBDetaTable} from 'mdbreact';

export default function userOrders(){
    const setOrders=()=>{
        const data={
            columns:[
                {
                    label:"Order ID",
                    field:'id',
                    sort:"asc"
                },
                {
                    label:"Number of Items",
                    field:'numOfItems',
                    sort:"asc"
                },
                {
                    label:"Amount",
                    field:'amount',
                    sort:"asc"
                },
                {
                    label:"Status",
                    field:'status',
                    sort:"asc"
                },
                {
                    label:"Actions",
                    field:'actions',
                    sort:"asc"
                }
            ],
            rows:
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