import React, { Fragment, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import * as Const from "../Constants";
import '../App.css';
import Articles from './articles';
import Payment from './Payment';

const Main = () => {
    const [data, setData] = useState([]);

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
            <Articles data={data}></Articles>
            <Payment></Payment>
        </Fragment>
     );
}
 
export default Main; 