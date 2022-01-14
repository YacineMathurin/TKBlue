import React from 'react';
import Article from './article';
import Grid from '@mui/material/Grid';


const Articles = () => {
    return ( 
        <React.Fragment>
            <h3 id='articles-services'><span>Nos</span> services</h3>
            <center>
                <p id='articles-bar'></p>
            </center>
            <Grid container spacing={2} style={{display:"flex", justifyContent:"center"}}>
                <Grid item xs={12} md={4} xl={4}>
                    <Article></Article>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Article></Article>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Article></Article>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Article></Article>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Article></Article>
                </Grid>
            </Grid>
        </React.Fragment>
     );
}
 
export default Articles;