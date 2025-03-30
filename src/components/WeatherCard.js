import React from "react";
import "../styles/WeatherCard.css";

function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className="weather-card">
      <h2 className="city-name">
        {weather.name}, {weather.sys.country}
      </h2>
      <img src={iconUrl} alt="Weather Icon" className="weather-icon animate-icon" />
      <p className="weather-description">{weather.weather[0].description}</p>
      <h1 className="temperature">{weather.main.temp}°C</h1>
      <div className="weather-details">
        <p>🌡️ Feels Like: {weather.main.feels_like}°C</p>
        <p>💨 Wind: {weather.wind.speed} m/s</p>
        <p>💧 Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
