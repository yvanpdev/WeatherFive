import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import WeatherPage from './Components/WeatherPage';

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/weatherpage" render={WeatherPage} />
    </Switch>
  </main>
);

export default Router;
