import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
