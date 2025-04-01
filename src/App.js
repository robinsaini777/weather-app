import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./styles/App.css";
import clouds from "./assets/clouds.jpg"; // ✅ Clouds Image Import

function App() {
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* 🌥️ Moving Clouds */}
      <div className="clouds" style={{ backgroundImage: `url(${clouds})` }}></div>

      <div className="container">
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        <h1 className="app-title">🌍 Weather App</h1>
        <SearchBar setWeather={setWeather} />
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
