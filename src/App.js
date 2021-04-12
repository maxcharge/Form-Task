import React from 'react';
import background from "./GreenBanner.png" 
import FormComponent from './components/FormComponent'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  

  return (
    <div className="App" style={{
      backgroundImage: `url(${background})` ,
      backgroundSize:"cover", 
      position:"fixed",
      minHeight:"100%",
      minWidth:"100%",
      backgroundPosition:"center",
       }} >
     <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <FormComponent />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
