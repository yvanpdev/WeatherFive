Description: Display weather in five different cities.

Work process:
rough draft of how the homepage should look
used create-react-app to start project + started git repo for version control
created card component to hold/show information of 5 cities
read Openweathermap API docs
pulled data from openweather, parse data using Weathercardlist to send individual city info to weather card component
used package tachyons for styling
used react-router-dom for routing pages
query data to weatherpage and places info on table (same process as from weatherlist to weathercard)
host project to heroku for demo

### [Demo] (https://arcane-crag-82275.herokuapp.com/)
![image] (https://user-images.githubusercontent.com/12747465/43614846-052e1c16-9683-11e8-9a4f-8d97d810092b.png)

Build:
```
npm install
npm start
```
browser should open to: http://localhost:3000

Technology Used:
JS ES6
React
create-react-app
Openweathermap API

Ideas for future iteration:
Radial menu style when selecting card [styling]
Search function for location [functionality]
Show map [api, functionality]
Use redux to store information - for possible location saving features
catch error / testing
mobile version
break down to smaller reusable components
