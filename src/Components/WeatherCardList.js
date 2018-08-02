import React from "react";
import WeatherCard from "./WeatherCard";

// Iterate through each city passing weather information WeatherCard component
const WeatherCardList = ({ cities}) => {

  if (cities) {
    const cardArray = cities.map(city => (
      <WeatherCard
        key={city.id}
        iconId={city.weather[0].icon}
        cityId={city.id}
        city={city.name}
        weather={city.weather[0].main}
        desc={city.weather[0].description}
        temp={city.main.temp}
        time={city.dt_txt}
      />
    ));

    return <div>{cardArray}</div>;
  }
  return <h1>LOADING</h1>;
};

export default WeatherCardList;
