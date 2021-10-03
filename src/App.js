import './App.css';
import {NavigationBar} from './Components/Nav/Nav.js';
import {ReportIncidentModal} from './Components/ReportIncident/ReportIncident';
<<<<<<< HEAD
import {FloorPlanAdder} from './Components/InsertingNewFloorMap/imageLoadModel';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { LandingComponent } from './Components/Landing/LandingCom';
=======
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { LandingComponent } from './Components/Landing/LandingCom';
import { TrainingComponent } from './Components/Training/TrainingCom';
import { HomeCom } from './Components/Home/HomeCom'
import React, {useState} from "react"

>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f

function App() {


  return (
    <div className="App">

      <section>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingComponent />
            </Route>
<<<<<<< HEAD
            <Route path="/home" exact>
              <NavigationBar />
            </Route>
            <Route path="/incidentReport" exact>
              <ReportIncidentModal />
            </Route>
            <Route path="/FloorPlan" exact>
              <FloorPlanAdder />
=======
            <Route path="/home" exact render={props => {
              return (
                <div>
                <NavigationBar />
                <HomeCom />
                </div>
              )
            }}/>

            <Route path="/incidentReport" exact>
              <NavigationBar />
              <ReportIncidentModal />
            </Route>
            <Route path="/training" >
              <NavigationBar />
              <TrainingComponent />
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
            </Route>
          </Switch>
        </Router>
      </section>

    </div>
  );
}

export default App;
