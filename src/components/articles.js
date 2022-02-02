import React, { useState } from 'react';
import Article from './article';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { setSum } from '../actions';


const Articles = ({data}) => {
    const ref = React.useRef(null);
    const [selected, setSelected] = useState([]);
    const [articleSelected, setArticleSelected] = useState([]);
    const counter = useSelector((state) => console.log("Redux state", state.articles.sum));
    const dispatch = useDispatch();
    const sumUp = (boughtArticles) => {

        var result = 0;
        boughtArticles.map(item => result += item.price);
        console.log("Sum", result);
        dispatch(setSum(result));
        // dispatch({ type: 'SUM', action: result });
        // onSum(result);
    }

    const handleClick = (id, price) => {
        console.log("selected",selected);
        var fakeSelected = selected;
        var res = selected.filter(item => item.id === id);
        console.log("Res",res);
        if(res.length === 0) {
          fakeSelected.push({id, price});
          setSelected(fakeSelected);
        //   this.setState({selected:fakeSelected}, () => this.sumUp())
          sumUp(fakeSelected);
          return setArticleSelected({...articleSelected, ["articleSelected"+id]: true});
        }
        fakeSelected = selected.filter(item => item.id !== id);
        console.log(fakeSelected, selected);
        setArticleSelected({...articleSelected, ["articleSelected"+id]: false});
        setSelected(fakeSelected);
        sumUp(fakeSelected);
        // this.setState({selected:fakeSelected}, () => this.sumUp())
    }
    return ( 
        <React.Fragment>
            <h3 id='articles-services'><span>Nos</span> services</h3>
            <center>
                <p id='articles-bar'></p>
            </center>
            <Grid container spacing={2} style={{display:"flex", justifyContent:"center"}}>
                {data.map(({id, name, price}, index) => (
                  <Grid key={index} item xs={12} md={4} xl={4}>
                      <Article id={id} name={name} price={parseFloat(price)} onHandleClick={handleClick} articleSelected={articleSelected["articleSelected" + id]}></Article>
                  </Grid>
                ))}
            </Grid>
            <div id="spacer"></div>
        </React.Fragment>
    )
}
 
export default Articles;