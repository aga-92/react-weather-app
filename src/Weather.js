import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: "http://openweathermap.org/img/wn/04d@2x.png",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <input type="search" placeholder="Enter a city..." />
          <input type="submit" value="search" className="btn btn-primary" />
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="date">
          <li>
            <FormattedDate date={weatherData.date} />{" "}
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-6 weather-icon-temp">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="icon"
              />
              <strong className="temperature">
                {Math.round(weatherData.temperature)}
              </strong>{" "}
              <span className="units">°C | F</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1028a4217ab0dffe23c1de638876457e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
