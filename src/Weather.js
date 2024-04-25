import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState(null);

  function searchWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setMessage(response.data);
  }

  return (
    <div className="row input-group mb-3">
      <form className="form-control" onSubmit={searchWeather}>
        <div className="col">
          <input
            type="search"
            name="city"
            className="form-control"
            placeholder="Enter City Name"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      {message && (
        <ul>
          <li>Temperature: {message.main && message.main.temp}</li>
          <li>Description: {message.weather && message.weather[0].description}</li>
          <li>Humidity: {message.main && message.main.humidity}</li>
          <li>Wind: {message.wind && message.wind.speed}</li>
        </ul>
      )}
    </div>
  );
}
