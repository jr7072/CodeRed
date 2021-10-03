import './App.css';
import {NavigationBar} from './Components/Nav/Nav.js';
import {ReportIncidentModal} from './Components/ReportIncident/ReportIncident';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { LandingComponent } from './Components/Landing/LandingCom';
import { TrainingComponent } from './Components/Training/TrainingCom';
import { HomeCom } from './Components/Home/HomeCom'
import React, {useState} from "react"
import { IncidentReportComponent } from './Components/IncidentReport/IncidentReport';
import { HeatMapCom } from './Components/HeatMap/HeatMapCom';
import {Location1} from "./Components/Maps/Map1";
import {Location2} from "./Components/Maps/Map2";
import { HeatLanding } from './Components/HeatMap/HeatLanding';
<<<<<<< HEAD
import {Google} from "./Util/Google/Google";

=======
import {ChemicalInjury} from './Components/ChemicalInjury/ChemicalInjury';
import { VehicleStrike } from './Components/VehicleStrike/VehicleStrike';
>>>>>>> 849e5af0a3d9af75fa40befe5bff97e3d77657a4


function App() {

  const [name, setName] = useState("");

  const handleName = (response) => {

    setName(response.profileObj.name);
  }

  return (
    <div className="App">

      <section>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingComponent handleName={handleName}/>
            </Route>
            <Route path="/home" exact render={props => {
              return (
                <div>
                <NavigationBar />
                <HomeCom name={name}/>
                </div>
              )
            }}/>
            <Route path="/incidentReport" exact>
              <NavigationBar />
              <IncidentReportComponent />
            </Route>
            <Route path="/incidentReport/9516548213" exact>
              <NavigationBar />
              <ChemicalInjury />
            </Route>
            <Route path="/incidentReport/1534567586" exact>
              <NavigationBar />
              <VehicleStrike />
            </Route>
            <Route path="/training" >
              <NavigationBar />
              <TrainingComponent />
            </Route>
            <Route path="/heatmap" exact >
              <NavigationBar />
              <HeatMapCom />
              <HeatLanding />
            </Route>
            <Route path="/heatmap/location-1">
              <NavigationBar />
              <HeatMapCom />
              <Location1 />
            </Route>
            <Route path="/heatmap/location-2">
              <NavigationBar />
              <HeatMapCom />
              <Location2 />
            </Route>
          </Switch>
        </Router>
      </section>

    </div>
  );
}

export default App;
