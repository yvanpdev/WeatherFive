import React from "react";


const kelvinToFahrenheit = kTemp => ((kTemp * (9/5)) - 459.67).toFixed(0);

const WeatherCard = ({ id, city, weather, desc, temp }) => (
  <div className="w-20 flex-wrap bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 ">
    <img alt="weather" src={`http://openweathermap.org/img/w/${id}.png`} />
    <h1>{kelvinToFahrenheit(temp)}&#xb0;F</h1>
    <div>
      <h1>{weather}</h1>
      <p>{desc}</p>
      <h2>{city}</h2>
    
    </div>
  </div>
);


export default WeatherCard;
