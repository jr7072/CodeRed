import './App.css';
import {NavigationBar} from './Components/Nav/Nav.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { LandingComponent } from './Components/Landing/LandingCom';

function App() {
  return (
    <div className="App">

      <section>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingComponent />
            </Route>
            <Route path="/home" exact>
              <NavigationBar />
            </Route>
          </Switch>
        </Router>
      </section>

    </div>
  );
}

export default App;
