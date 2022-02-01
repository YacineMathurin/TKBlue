import React from 'react';
import { useSelector } from 'react-redux';

const Payment = () => {
    const sum = useSelector((state) => state.articles.sum);
    return ( 
        <div id='payment'><span>Total</span><span id="price">{sum} €</span></div>
    );
}
 
export default Payment;