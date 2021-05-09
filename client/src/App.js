import React from 'react'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

// import './style.css';

function App(){

    return(
      <>
           <Switch>
          <Route exact path="/">
            <Pages.Home />
          </Route>
          <Route path="/about">
            <Pages.About />
          </Route>
          <Route path="/game">
            <Pages.CommandLine />
          </Route>
          <Route>
            <Pages.NotFound />
          </Route>
        </Switch>
      </>
    );
  
  };
  
export default App;