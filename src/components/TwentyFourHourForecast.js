import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import API from "../API";

const now = new Date();

const TwentyFourHourForecast = () => {

    const [forecastMorning, setForecastMorning] = useState([]);
    const [forecastAfternoon, setForecastAfternoon] = useState([]);
    const [forecastNight, setForecastNight] = useState([]);
    const [time, setTime] = useState([]);

    const currentWeather = async () => {
        const { status, data } = await API.get('/environment/24-hour-weather-forecast');
        const apiForecastMorning = data.items[0].periods[0].regions.central;
        const apiForecastAfternoon = data.items[0].periods[1].regions.central;
        const apiForecastNight = data.items[0].periods[2].regions.central;
        const apiTimestamp = data.items[0].timestamp;

        if (status === 200) {
            setForecastMorning(apiForecastMorning);
            setForecastAfternoon(apiForecastAfternoon);
            setForecastNight(apiForecastNight);
            setTime(apiTimestamp);
        }
    }

    useEffect(() => {
        currentWeather();
    }, []);


        return (
            <>
            <h3>24-Hour Weather Forecast</h3>
            <h4>Central Region</h4>
            <p>{forecastMorning}</p>
            <p>{forecastAfternoon}</p>
            <p>{forecastNight}</p>




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
