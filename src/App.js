import './App.css';
import {NavigationBar} from './Components/Nav/Nav.js';
import {ReportIncidentModal} from './Components/ReportIncident/ReportIncident';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { LandingComponent } from './Components/Landing/LandingCom';
import { TrainingComponent } from './Components/Training/TrainingCom';
import { HomeCom } from './Components/Home/HomeCom'
import React, {useState} from "react"


function App() {


  return (
    <div className="App">

      <section>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingComponent />
            </Route>
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
            </Route>
          </Switch>
        </Router>
      </section>

    </div>
  );
}

export default App;
