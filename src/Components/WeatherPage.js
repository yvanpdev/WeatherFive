import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import API_KEY from "../Config/WeatherAPI";


function convertKmphToMph(kmph) {
  return kmph * 0.621371;
}

const kelvinToFahrenheit = kTemp => (kTemp * (9 / 5) - 459.67).toFixed(0);

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      cityId: location.state.detail,
      cityData: []
    };
  }

  componentDidMount() {
    this.getCityInfo();
  }

  getCityInfo() {
    const { cityId } = this.state;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}`
      )
      .then(res =>
        this.setState({
          cityData: res.data.list,
          cityName: res.data.city.name
        })
      );
  }

  // map through city data to display forecast on a table
  renderForecast() {
    const { cityData } = this.state;
    const listArray = cityData.map(data => {
      const time = data.dt_txt;
      const icon = `http://openweathermap.org/img/w/${
        data.weather[0].icon
      }.png`;
      const iconName = data.weather[0].description;
      const temp = `${kelvinToFahrenheit(data.main.temp)}°F`;
      const arrowStyling = {
        transform: `rotate(${Math.round(data.wind.deg)}deg)`
      };
      const windSpeed = `${Math.round(convertKmphToMph(data.wind.speed))} mph`;
      const windDirection = `${Math.round(data.wind.deg)}°`;

      return (
        <tr>
          <td className="pv3 pr3 bb b--black-20">{time}</td>
          <td className="pv3 pr3 bb b--black-20">
            {" "}
            <img src={icon} alt={iconName} title={iconName} />
            {iconName}
          </td>
          <td className="pv3 pr3 bb b--black-20">{temp}</td>
          <td className="pv3 pr3 bb b--black-20">
            <img
              style={arrowStyling}
              src="../arrow.svg"
              alt={windDirection}
              title={windDirection}
            />
            {windSpeed}
          </td>
        </tr>
      );
    });

    return (
      <div className="pa4 bg-white-50">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center bg-white pa4">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Time</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Weather</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                  Temperature
                </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                  Wind Speed
                </th>
              </tr>
            </thead>
            <tbody classNama="1h-copy">{listArray}</tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    const { cityName } = this.state;
    return (
      <div>
        <div className="tc">
          <h1 className="f-5">{cityName}</h1>
          <h2 className="f-4">Five Day Forecast</h2>
        </div>
        {this.renderForecast()}
      </div>
    );
  }
}
export default withRouter(WeatherPage);
