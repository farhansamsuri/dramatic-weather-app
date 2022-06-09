import { useEffect, useState } from "react";
import API from "../API";
import '../styles/TwoHourWeather.css';
import dateFormat from 'dateformat';

const TwoHourWeather = (props) => {

    const [weatherIcon, setWeatherIcon] = useState('');
    const [weather, setWeather] = useState([]);
    const [time, setTime] = useState("");
    const [temp, setTemp] = useState ({});

    const getWeather = async () => {
        const { status, data } = await API.get(
            "/environment/2-hour-weather-forecast"
        );
        if (status === 200) {
            setWeather(data.items[0].forecasts);
            setTime(data.items[0].update_timestamp);
        }
    };

    const getTemperature = async () => {
      const {status, data } = await API.get(
        "/environment/24-hour-weather-forecast"
      );
      if (status === 200) {
        setTemp(data.items[0].general.temperature);
        return(status);
      }
    }

    const userArea = props.area;
    const currentWeather = weather.filter((f) => f.area === userArea).map(filtered => filtered.forecast); 

    useEffect(() => {
        getWeather();
        getTemperature();
        console.log("weather", weather);
        console.log("weather-icon", weatherIcon);

        const stringWeather = currentWeather.join();

        switch (true) {
            case stringWeather.includes("Thundery"):
                setWeatherIcon('thunderstorm-2hr');
                break;
            case stringWeather.includes("Fair"):
                setWeatherIcon('sunny-2hr');
                break;
            case stringWeather.includes("Cloudy" || "Partly Cloudy (Day)"):
                setWeatherIcon('cloudy-2hr');
                break;
            case stringWeather.includes("Showers" || "Moderate Rain"):
                setWeatherIcon('showers-2hr');
                break;
            case stringWeather.includes("Light"):
                setWeatherIcon('light-rain-2hr');
                break;
              }

              console.log("currentWeather", currentWeather);
    }, [userArea, time]);

    return (
        <div>
            <h2>2 Hour Weather</h2>
            {userArea}, {dateFormat(time, "hh:MM TT")}
            <div className='weather-icon-2hr' id={weatherIcon}></div>
            <p>{currentWeather}</p>
            <ul> Temperature
            <li>High: {temp.high}</li>
            <li>Low: {temp.low}</li>
            </ul>
        </div>
    );
};


export default TwoHourWeather;
