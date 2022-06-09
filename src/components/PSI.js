import { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import API from '../API';
import '../styles/PSI.css';

const PSI = (props) => {

    const [index, setIndex] = useState({});
    const [time, setTime] = useState(''); //for checking only
    const [region, setRegion] = useState('');

    const getPSI = async () => {
        const { status, data } = await API.get('/environment/psi');
        const readings = data.items[0].readings.psi_twenty_four_hourly;
        const timestamp = data.items[0].timestamp;
        if (status === 200) {
            setIndex(readings);
            setTime(timestamp)
        }
    }

    useEffect(() => {
        getPSI();
        setRegion(props.region);
        console.log("useEffect has been called") //for checking only
    }, [props.region]);

    var alertLevel;
    var airQuality;
    switch (true) {
        case (index[region] <= 50):
            alertLevel = "green";
            airQuality = "Good";
            break;
        case (51 <= index[region] <= 100):
            alertLevel = "blue";
            airQuality = "Moderate";
            break;
        case (101 <= index[region] <= 200):
            alertLevel = "yellow";
            airQuality = "Unhealthy";
            break;
        case (201 <= index[region] <= 300):
            alertLevel = "orange";
            airQuality = "Very Unhealthy";
            break;
        case (300 <= index[region]):
            alertLevel = "red";
            airQuality = "Hazardous";
            break;
        default:
            alertLevel = "Error";
            break;
    }

    return (<>
        <h2>PSI index</h2>
        <div className='subheader'>As of {dateFormat(time, "dddd, dS mmmm yyyy, h:MM TT")}</div>
        <ul>
            <li>National: {index.national}</li>
            <li>North: {index.north}</li>
            <li>South: {index.south}</li>
            <li>East: {index.east}</li>
            <li>West: {index.west}</li>
            <li>Central: {index.central}</li>
        </ul>
        <div className='psi-container' id={alertLevel}>
            <div id='region'>
                {region.toUpperCase()}
            </div>
            <div className='psi-index' id='psi-index'>
                {index[region]}
            </div>
            <div>
                {airQuality}
            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>PSI</th>
                        <th>Air Quality</th>
                    </tr>
                </thead>   
                <tbody>
                    <tr>
                        <td>0 - 50</td>
                        <td>Good</td>
                    </tr>
                    <tr>
                        <td>51 - 100</td>
                        <td>Moderate</td>
                    </tr>
                    <tr>
                        <td>101 - 200</td>
                        <td>Unhealthy</td>
                    </tr>
                    <tr>
                        <td>201-300</td>
                        <td>Very Unhealthy</td>
                    </tr>
                    <tr>
                        <td>Above 300</td>
                        <td>Hazardous</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)

}

export default PSI; 