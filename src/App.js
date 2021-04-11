import FormComponent from './components/FormComponent'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {


  return (
    <div className="App" >
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
