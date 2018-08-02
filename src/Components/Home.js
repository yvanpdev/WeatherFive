import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../Config/WeatherAPI";
import WeatherCardList from "./WeatherCardList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesID: [5128638, 4058076, 3882428, 4887398, 4440906],
      cities: []
    };
  }

  componentDidMount() {
    this.getCitiesInfo();
  }

  // map through 5 cities each get request for current weather info. callback set state for cities.

  getCitiesInfo() {
    const { citiesID } = this.state;
    citiesID.map(city =>
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${city}&?units=imperial&APPID=${API_KEY}`
        )
        .then(res =>
          this.setState({ cities: [...this.state.cities, res.data] })
        )
    );
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f-6">Weather Five</h1>
        <WeatherCardList cities={this.state.cities} />
      </div>
    );
  }
}

export default Home;
