import { useEffect, useState } from "react";
import API from "../API";

const TwoHourWeather = () => {
  const [weather, setWeather] = useState("");
  const [time, setTime] = useState("");

  const getWeather = async () => {
    const { status, data } = await API.get(
      "/environment/2-hour-weather-forecast"
    );
    if (status === 200) {
      setWeather(data.items[0].forecasts[0]);
      setTime(data.items[0].update_timestamp);
    }
  };

  useEffect(() => {
      getWeather();
      console.log('weather', weather);
  }, [])

  return (
    <div>
      <h2>2 Hour Weather</h2>
      {weather.area}, {weather.forecast}
    </div>
  );
};

export default TwoHourWeather;
