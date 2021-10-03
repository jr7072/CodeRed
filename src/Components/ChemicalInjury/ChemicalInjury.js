import React from 'react';
import "./ChemicalInjury.css";
import { Table } from 'react-bootstrap';

export const ChemicalInjury = () => {

    return(
        <div className="chemical-injury">
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
                        <td>Injured by Chemical Proccessing </td>
                        <td>Jim James Johnson Jones</td>
                        <td>location2</td>
                        <td>2021-09-28</td>
                        <td>09:23</td>
                        <td>Chemical Exposure</td>
                        </tr>
                    </tbody>
                </Table>
                </p>
            </div>
        </div>
    )
}