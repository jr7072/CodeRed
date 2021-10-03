import React , {useState, useEffect} from 'react';
import { Table, TableCell } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
export const IncidentReportPage = () => {

    const [incidents, setIncidents] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        if(isLoading){    
        axios
        .get("http://localhost:5000/incident/")
        .then((res) => {

            res.data = res.data.slice(res.data.length - 6, res.data.length);
            setIncidents(res.data.reverse());
        })
        .then(() => {
            setLoading(false);
            
        })
        .catch(function (error) {
          console.log(error);
        });
        }
    }, [isLoading, incidents]);

    const convertIncidentType = (number) => {
        switch (number){
            case "1":
                return "Burns"
            case "2":
                return "Back Injury"
            case "3":
                return "Chemical Exposure"
            case "4":
                return "Falls"
            case "5":
                return "Combustion"
            case "6":
                return "Crushing";
            case "7":
                return "Vehicle Strike"
            case "8":
                return "Near Miss"
            default:
                break;
        }
    }

    const handleClick = () => setLoading(true);


    return(
        <div className="incidents">
        <div className="top-banner">
            <h2>Recent Incidents</h2>
            <div className="refresh">
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Loading…' : 'Refresh'}
            </Button>
            </div>
        </div>
        <div className="cards">

            {incidents.map(item => {

                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.IncidentName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Type: {convertIncidentType(item.IncidentType)} </Card.Subtitle>
                            <Card.Text>
                                Employee: {item.Employee} <br/>
                                Workplace: {item.Workplace} <br/>
                                Date: {item.Date} <br/>
                                Time: {item.Time} <br/>

                                
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                )
            })}

            

        </div>
        </div>
        
    )
}