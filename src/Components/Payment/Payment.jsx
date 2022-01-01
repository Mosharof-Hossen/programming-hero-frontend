import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Payment = (props) => {
    let { name } = useParams()
    const { pathname } = useLocation()
    console.log(pathname);
    console.log(name);
    return (
        <div>
            <h1>Payment</h1>
        </div>
    );
}

export default Payment;
