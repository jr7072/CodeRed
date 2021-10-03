import React , {useState, useEffect} from 'react';
import { Table, TableCell } from 'react-bootstrap';
import axios from 'axios';
import { GoogleButton } from '../../Util/Google/GoogleButton';

export const IncidentReportPage = () => {

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {    
        axios
        .get("http://localhost:5000/incident/")
        .then((res) => {
            setIncidents(res.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    return(
        <div>
            <div>
                Aw hell nah
            </div>
            <Table className="incidentTable" striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    {incidents.map((x) => {
                        return(
                            <tr>
                            <td>{x.IncidentName}</td>
                            <td>{x.Employee}</td>
                            <td>{x.LocationX}</td>
                            <td>{x.LocationY}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        
    )
}