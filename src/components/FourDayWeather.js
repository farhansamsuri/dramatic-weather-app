import { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import API from '../API';
import '../styles/FourDayWeather.css'

const FourDayWeather = () => {

    const [forecastArray, setForecastArray] = useState([]);
    const [todayForecast, setTodayForecast] = useState([]);
    const [temp, setTemp] = useState({});
    const [time, setTime] = useState(''); //for checking only

    const date = new Date();

    const getWeather = async () => {
        const { status, data } = await API.get('/environment/4-day-weather-forecast', date);
        const forecastArray = data.items[0].forecasts;
        const todayForecast = data.items[0].forecasts[0].forecast;
        const temperature = data.items[0].forecasts[0].temperature;
        const timestamp = data.items[0].update_timestamp;
        if (status === 200) {
            setForecastArray(forecastArray)
            setTodayForecast(todayForecast);
            setTemp(temperature);
            setTime(timestamp);
        }
    }
    
    const forecastList = forecastArray.map((f, i) => {
        if (i > 0) {
            return (<div className='four-day-list'>
                {f.date}
                <br />
                {f.temperature.low}°C - {f.temperature.high}°C
                <br />
                {f.forecast}
                <br />
            </div>)
        }; 
    })

    var weatherIcon; 
    switch(true) {
        case (todayForecast.includes("thundery showers")):
            weatherIcon = "thunderstorm";
            break;
        case (todayForecast.includes("fair")):
            weatherIcon = "sunny";
            break;
        default:
            weatherIcon = '';
            break;
    }

    useEffect(() => {
        getWeather();
        console.log("useEffect has been called") //for checking only
    }, [time]);

    return (
        <div className='four-day-container'>
            <h2>4-Day Weather Forecast</h2>
            <div className='subheader'>As of {dateFormat(time, "dddd, dS mmmm yyyy, h:MM TT")}</div>
            <h3>Today's temperature</h3>
            {temp.low}°C - {temp.high}°C
            <br />
            <h3>Today's forecast</h3>
            <div className='weather-icon' id={weatherIcon}></div>
            {todayForecast}
            <h3>Forecast for the next 3 days</h3>
            {forecastList}
        </div>
    );

}

export default FourDayWeather; 