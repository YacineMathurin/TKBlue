import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Component from './components/component';
import Main from './components/main';

const App = () => {

  React.useEffect(() => {
    console.log("CDM");

    return () => {
      console.log("CDUnmount");
    }
  }, []);

  return ( 
    <React.Fragment>
      {/* <h1>Salaam !</h1> */}
      <div className="App">
        <header>
          <h3>TK'Blue</h3>
        </header>
      </div>
      <Router>
      {/* <Link to="component">Get Hello</Link> */}
        <Switch>
          <Route path="/component">
            <Component></Component>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
   );
}
 
export default App;