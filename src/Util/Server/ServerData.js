import axios from 'axios';

export const data = {
    //returns a 2d array of points of each location
    getPoints(){

        return axios.get("http://localhost:5000/incident/")
        .then(response => response.data)
        .then(data => data.map(item => [item.LocationX, item.LocationY, item.Workplace]));
    }
}