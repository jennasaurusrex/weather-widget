import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          {!this.props.error && this.props.country && this.props.city && (
            <p>
              <span className="weather-city"> {this.props.city}</span>
              <span className="weather-country">, {this.props.country}</span>
            </p>
          )}
        </div>
        <div className="row">
          {this.props.error && <p>{this.props.error}</p>}
          <div className="col-xs-6 text-center align-middle">
            {!this.props.error && this.props.weather === "Clouds" && (
              <p>
                <FontAwesomeIcon
                  className="vertical-align"
                  size="8x"
                  icon="cloud"
                  color="#ccc"
                />
              </p>
            )}

            {!this.props.error && this.props.weather === "Rain" && (
              <p>
                <FontAwesomeIcon
                  className="vertical-align"
                  size="8x"
                  icon="cloud-showers-heavy"
                  color="#add8e6"
                />
              </p>
            )}

            {!this.props.error && this.props.weather === "Drizzle" && (
              <p>
                <FontAwesomeIcon
                  className="vertical-align"
                  size="8x"
                  icon="cloud-showers-heavy"
                  color="#add8e6"
                />
              </p>
            )}

            {!this.props.error && this.props.weather === "Clear" && (
              <p>
                <FontAwesomeIcon
                  className="vertical-align"
                  size="8x"
                  icon="sun"
                  color="#FCD440"
                />
              </p>
            )}

            {!this.props.error && this.props.weather === "Smoke" && (
              <p>
                <FontAwesomeIcon
                  className="vertical-align"
                  size="8x"
                  icon="smog"
                  color="#f5f5dc"
                />
              </p>
            )}

            {!this.props.error && this.props.weather === "Haze" && (
              <p>
                <FontAwesomeIcon
                  className="vertical-align"
                  size="8x"
                  icon="smog"
                  color="#ccc"
                />
              </p>
            )}
          </div>
          <div className="col-xs-6 text-center">
            {!this.props.error && this.props.temperature && (
              <p>
                <span className="weather-temp">
                  {" "}
                  {Math.round(this.props.temperature)}&deg;
                </span>
              </p>
            )}

            {!this.props.error && this.props.description && (
              <p>
                <span className="weather-description">
                  {" "}
                  {this.props.description.charAt(0).toUpperCase() +
                    this.props.description.substr(1).toLowerCase()}
                  .
                </span>
              </p>
            )}
          </div>
        </div>
        {!this.props.error && this.props.weather && <hr />}
        <div className="row">
          <div className="col-xs-4 text-center border">
            {!this.props.error && this.props.wind && (
              <p>
                <FontAwesomeIcon icon="wind" size="3x" />
                <br />
                <br />
                <span> {Math.round(this.props.wind)} mi/hr</span>
              </p>
            )}
          </div>
          <div className="col-xs-4 text-center">
            {!this.props.error && this.props.humidity && (
              <p className="border">
                <FontAwesomeIcon icon="tint" size="3x" />
                <br />
                <br />
                <span> {this.props.humidity}&#37;</span>
              </p>
            )}
          </div>
          <div className="col-xs-4 text-center">
            {!this.props.error && this.props.clouds && (
              <p>
                <FontAwesomeIcon icon="cloud" size="3x" />
                <br />
                <br />
                <span> {Math.round(this.props.clouds)}&#37;</span>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
