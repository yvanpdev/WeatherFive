import React, { Component } from "react";
import { withRouter } from "react-router";

class WeatherPage extends Component {
  render() {
    const { location} = this.props;
    return <div>You are now at {location.pathname}</div>;
  }
}
export default withRouter(WeatherPage);
