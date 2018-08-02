import React, { Component } from "react";
import { withRouter } from "react-router";
import "./WeatherCard.css";

const kelvinToFahrenheit = kTemp => (kTemp * (9 / 5) - 459.67).toFixed(0);

class WeatherCard extends Component {

  handleClick(e) {
    const { history } = this.props;
    history.push({
      pathname: "/weatherpage",
      search: "?query=abc",
      state: { detail: e }
    });
  }

  render() {
    const { iconId, cityId, city, weather, desc, temp, time } = this.props;
    return (
      /* eslint-disable */
      <div
        onClick={this.handleClick.bind(this, cityId)}
        className="heightw gradient-blue dib br3 pa3 pv5 ma4 grow bw2 shadow-5 "
      >
        {/* eslint-enable */}
        <div>
          <img
            alt="weather"
            className="fl w-70"
            src={`http://openweathermap.org/img/w/${iconId}.png`}
          />
          <h1 className="fl w-10">{kelvinToFahrenheit(temp)}&#xb0;F</h1>
        </div>
        <div className="mt7">
          <h1>{weather}</h1>
          <p>{desc}</p>
          <h2>{city || time}</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(WeatherCard);
