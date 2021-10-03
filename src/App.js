import './App.css';
import {NavigationBar} from './Components/Nav/Nav.js';
import {ReportIncidentModal} from './Components/ReportIncident/ReportIncident';
import {FloorPlanAdder} from './Components/InsertingNewFloorMap/imageLoadModel';
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
            <Route path="/incidentReport" exact>
              <ReportIncidentModal />
            </Route>
            <Route path="/FloorPlan" exact>
              <FloorPlanAdder />
            </Route>
          </Switch>
        </Router>
      </section>

    </div>
  );
}

export default App;
