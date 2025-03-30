import React, { useState } from "react";
import "../styles/SearchBar.css";

const API_KEY = "ae1ae157f9f5da64ccb83f8d405a3258"; // ✅ Tumhari API Key

function SearchBar({ setWeather }) {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("❌ City not found! 🌍");
      }
    } catch (error) {
      alert("❌ Error fetching weather data!");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-button" onClick={fetchWeather}>
        🔍 Search
      </button>
    </div>
  );
}

export default SearchBar;
