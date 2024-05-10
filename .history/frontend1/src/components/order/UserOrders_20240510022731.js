import {Fragment} from 'react';
import MetaData from '../layouts/MetaData';
import{MDBDetaTable} from 'mdbreact';

export default function userOrders(){
    return(
        <Fragment>
            <MetaData title="My Orders"/>
            <h1 className='mt-5'>My Orders</h1>
            <MDBDetaTable
                className='px-3'//positionx 3
                bordered
                striped //onnuvidda row black ah theriyum
                hover
            />

        </Fragment>
    )
}