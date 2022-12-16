import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
      <h1>Berlin</h1>
      <ul className="date">
        <li>Friday 12:20</li>
        <li>Broken clouds</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-6 weather-icon-temp">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="icon"
              className="icon"
            />
            <strong className="temperature">3</strong>{" "}
            <span className="units">°C | F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 86%</li>
              <li>Wind: 1km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
