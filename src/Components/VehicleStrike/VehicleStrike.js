import React from 'react';
import "./VehicleStrike.css";
import { Table } from 'react-bootstrap';

export const VehicleStrike = () => {

    return(
        <div className="vehicle-strike">
            <div className="image">
            </div>
            <div className="text-box">
                <h2>Incident Details</h2>
                <p>
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
                        <tr>
                        <td>Man Struck With Equipment</td>
                        <td>Harry</td>
                        <td>location2</td>
                        <td>2018-09-11</td>
                        <td>14:23</td>
                        <td>Vehicle Strike</td>
                        </tr>
                    </tbody>
                </Table>
                </p>
            </div>
        </div>
    )
}