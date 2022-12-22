import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            className="Forecast-icon"
            width={60}
          />
          <div className="Forecast-temperature">
            <span className="Forecast-temperature-max">16°</span>
            <span className="Forecast-temperature-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
