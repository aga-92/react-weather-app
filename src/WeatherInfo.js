import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul className="date">
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-6 weather-icon-temp">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="icon"
            />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-6 mt-4">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
