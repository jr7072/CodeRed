import React , {useState, useEffect} from 'react';
import { Table, TableCell } from 'react-bootstrap';
import axios from 'axios';

export const IncidentReportPage = () => {

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {    
        axios
        .get("http://localhost:5000/incident/")
        .then((res) => {
            setIncidents(res.data)
            //console.log(incidents);
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    const convertIncidentType = (number) => {
        switch (number){
            case "1":
                return "Burns"
                break;
            case "2":
                return "Back Injury"
                break;
            case "3":
                return "Chemical Exposure"
                break;
            case "4":
                return "Falls"
                break;
            case "5":
                return "Combustion"
                break;
            case "6":
                return "Crushing"
                break;
            case "7":
                return "Vehicle Strike"
                break;
            case "8":
                return "Near Miss"
                break;
        }
    }

    return(
        <div>
            <div>
                Aw hell nah
            </div>
            <Table className="incidentTable" striped bordered hover>
                <thead>
                    <tr>
                    <th>Incident Name</th>
                    <th>Employee</th>
                    <th>Workplace</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Incident Type</th>
                    </tr>
                </thead>
                <tbody>
                    {incidents.map((x) => {
                        return(
                            <tr>
                            <td>{x.IncidentName}</td>
                            <td>{x.Employee}</td>
                            <td>{x.Workplace}</td>
                            <td>{x.Date}</td>
                            <td>{x.Time}</td>
                            <td>{convertIncidentType(x.IncidentType)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        
    )
}