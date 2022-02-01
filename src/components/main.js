import React, { Fragment, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import * as Const from "../Constants";
import '../App.css';
import Articles from './articles';

const Main = () => {
    const [data, setData] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        fetch(Const.URL_GET_PRODUCTS)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        setData(data);
        })
        .catch(err => console.error(err))
    }, []);

    return (
        <Fragment>
            <Articles data={data} onSum={setSum}></Articles>
            <div id='payment'><span>Total</span><span id="price">{sum} €</span></div>
        </Fragment>
     );
}
 
export default Main; 