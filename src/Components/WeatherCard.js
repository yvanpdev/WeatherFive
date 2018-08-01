import React, { Component } from "react";
import { withRouter } from "react-router";
import "./WeatherCard.css";

const kelvinToFahrenheit = kTemp => (kTemp * (9 / 5) - 459.67).toFixed(0);

class WeatherCard extends Component {
  handleClick = () =>
    this.props.history.push('/weatherpage');

  render() {
    const { id, city, weather, desc, temp } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className="heightw bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 "
      >
        <img alt="weather" src={`http://openweathermap.org/img/w/${id}.png`} />
        <h1>{kelvinToFahrenheit(temp)}&#xb0;F</h1>
        <div>
          <h1>{weather}</h1>
          <p>{desc}</p>
          <h2>{city}</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(WeatherCard);
