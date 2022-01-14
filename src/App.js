import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selected:[], 
      data:[],
      sum:0
    }
  }

  componentDidMount() {
    fetch("https://dockeryhadev.emissions-calculator.com/api/test/options")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({data});
    })
    .catch(err => console.error(err))
  }

  sumUp = () => {
    const {selected} = this.state;
    var sum = 0;
    selected.map(item => sum+=item.price)
    console.log("Sum",sum, "selected", selected);
    this.setState({sum});
  }
  Article = (id,name, price)  => {
    const {selected} = this.state;
    const handleClick = () => {
      console.log("selected",selected);
      var fakeSelected = selected;
      const el = document.getElementsByClassName('ajout'+id)[0];
      console.log(el);
      var res = selected.filter(item => item.id === id);
      console.log("Res",res);
      if(res.length === 0) {
        fakeSelected.push({id, price});
        this.setState({selected:fakeSelected}, () => this.sumUp())

        return el.style.top="0";
      }
      fakeSelected = selected.filter(item => item.id !== id);
      console.log(fakeSelected, selected);
      el.style.top="-40px";
      this.setState({selected:fakeSelected}, () => this.sumUp())
    }
    return ( 
        <React.Fragment>
            <div  id='article' onClick={()=>handleClick()}>
                <span className={'ajout'+id} id={'ajout'}>Ajouté</span>
                <span id='prix'>{price} $</span>
                <p>{name}</p>
            </div>
        </React.Fragment>
    );
  }

  Articles = () => {
    const {data}= this.state;
  return ( 
      <React.Fragment>
          <h3 id='articles-services'><span>Nos</span> services</h3>
          <center>
              <p id='articles-bar'></p>
          </center>
          <Grid container spacing={2} style={{display:"flex", justifyContent:"center"}}>
              {data.map(({id, name, price}, index) => (
                <Grid key={index} item xs={12} md={4} xl={4}>
                    {this.Article(id, name, parseInt(price))}
                </Grid>
              ))}
          </Grid>
      </React.Fragment>
    );
  }
  render() { 
    const {sum} = this.state;
    return (
    <div className="App">
    <header>
      <h3>TK'Blue</h3>
    </header>
    <div className='main'>
      {this.Articles()}
    </div>
    <div id='payment'><span>Total</span>{sum} $</div>

    </div>
  )
  }
}
 
export default App;

 