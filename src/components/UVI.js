import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import dateFormat from "dateformat";

const UVIndex = axios.create({ baseURL: "https://api.data.gov.sg" });

const UVI = () => {
  const [display, setDisplay] = useState("");
  const [colour, setColour] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");

  let styles = "";



  const listUV = async () => {
    const { status, data } = await UVIndex.get("v1/environment/uv-index");
    if (status === 200) {
      setDisplay(data.items[0].index[0].value);
      setTime(data.items[0].index[0].timestamp);
      return status;
    }
  };

  const handleColour = async () => {
    if (display < 3) {
      styles = "greenUV";
      setStatus("Low");
    } else if (display < 6 || display > 2) {
      styles = "yellowUV";
      setStatus("Moderate");
    } else if (display < 8 || display > 5) {
      styles = "orangeUV";
      setStatus("High");
    } else if (display < 11 || display > 7) {
      styles = "redUV";
      setStatus("Very High");
    } else if (display > 10) {
      styles = "purpleUV";
      setStatus("Extreme");
    }
    return setColour(styles);
  };

  useEffect(() => {
    listUV();
    handleColour();
    console.log("UV", display);
    console.log("colour", colour);
  }, [handleColour]);

  return (
    <div>
      <h2>UV Index</h2>
      <h3 className="uvDisplay" id={colour}>
        {display}
      </h3>
      <h2 id={colour} style={{border: '0px solid grey'}}>{status}</h2>
      <p className="latestHour">UV index at {dateFormat(time, "dddd, dS mmmm yyyy, h:MM TT")}</p>
      {/*         <h3 className="uvDisplay">Current: {display}</h3> */}
      <table>
        <thead>
          <tr>
            <th>Index Scale</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0 - 2</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>3 - 5</td>
            <td>Moderate</td>
          </tr>
          <tr>
            <td>6 - 7</td>
            <td>High</td>
          </tr>
          <tr>
            <td>8 - 10</td>
            <td>Very High</td>
          </tr>
          <tr>
            <td>Above 11</td>
            <td>Extreme</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UVI;
