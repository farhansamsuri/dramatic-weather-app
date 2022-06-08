import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import API from "../API";

const now = new Date();

const TwentyFourHourForecast = (props) => {

    const result = props.region;
    const [forecast, setForecast] = useState('');
    const [time, setTime] = useState([]);
    
    const currentWeather = async () => {
        const { status, data } = await API.get('/environment/24-hour-weather-forecast');
        const apiForecast = data.items[0].periods[0].regions;
        const apiTimestamp = data.items[0].timestamp;

        if (status === 200) {
            switch(result){
                case "north":
                setForecast(apiForecast.north);
                break;

                case "south":
                setForecast(apiForecast.south);
                break;

                case "east":
                setForecast(apiForecast.east);
                break;

                case "west":
                setForecast(apiForecast.west);

                case "central":
                setForecast(apiForecast.central);
                break;
            }
            setTime(apiTimestamp);
            return status;
        }
        
        
    }



    useEffect(() => {
        currentWeather();
        console.log("Region and Forecast:", result, forecast);
    }, [result]);


        return (
            <>
            <h3>24-Hour Weather Forecast</h3>
            <h3>Morning</h3>
            {result}
            <br></br>
            {forecast}

            {/* <div>{dateFormat(now, "dddd, mmmm dS yyyy, h:MM:ss TT")}</div>
            <ul>
            <h4>North Region</h4>
                {forecast.map((o) => {
                    return <li>{dateFormat(o.time.start, "h:MM TT")} to {dateFormat(o.time.end, "h:MM TT")} {o.regions.north}
                    </li>
                })}
            </ul>
            <ul>
            <h4>South Region</h4>
                {forecast.map((o) => {
                    return <li>{dateFormat(o.time.start, "h:MM TT")} to {dateFormat(o.time.end, "h:MM TT")} {o.regions.south}
                    </li>
                })}
            </ul>
            <ul>
            <h4>Central Region</h4>
                {forecast.map((o) => {
                    return <li>{dateFormat(o.time.start, "h:MM TT")} to {dateFormat(o.time.end, "h:MM TT")} {o.regions.central}
                    </li>
                })}
            </ul>
            <ul>
            <h4>East Region</h4>
                {forecast.map((o) => {
                    return <li>{dateFormat(o.time.start, "h:MM TT")} to {dateFormat(o.time.end, "h:MM TT")} {o.regions.east}
                    </li>
                })}
            </ul>
            <ul>
            <h4>West Region</h4>
                {forecast.map((o) => {
                    return <li>{dateFormat(o.time.start, "h:MM TT")} to {dateFormat(o.time.end, "h:MM TT")} {o.regions.west}
                    </li>
                })}
            </ul> */}
            </>
        );
    

}

export default TwentyFourHourForecast;
