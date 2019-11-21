import React from "react";
import axios from "axios";
import Weather from "./components/weather";
import Form from "./components/form";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWind,
  faTint,
  faCloud,
  faCloudShowersHeavy,
  faSun,
  faSmog,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faWind,
  faTint,
  faCloud,
  faCloudShowersHeavy,
  faSun,
  faSmog,
  faSearch
);

class App extends React.Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    weather: null,
    wind: null,
    clouds: null,
    error: ""
  };

  getWeather = async e => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    axios({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`,
      method: "get"
    })
      .then(response => {
        this.setState({
          temperature: response.data.main.temp,
          city: response.data.name,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          weather: response.data.weather[0].main,
          wind: response.data.wind.speed,
          clouds: response.data.clouds.all,
          error: ""
        });
      })
      .then(res => console.log(res))
      .catch(() => this.setState({ error: "Please enter a location." }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container weather-info">
              <div className="row">
                <Form loadWeather={this.getWeather} />
              </div>
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                weather={this.state.weather}
                wind={this.state.wind}
                clouds={this.state.clouds}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
