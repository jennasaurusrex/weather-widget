import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Form extends React.Component {
  render() {
    return (
      <form className="form-inline" onSubmit={this.props.loadWeather}>
        <FontAwesomeIcon icon="search" />
        <label className="sr-only">City</label>
        <input
          type="text"
          className="form-control transparent-input"
          name="city"
          placeholder="City"
        />

        <label className="sr-only">Country</label>
        <input
          type="text"
          className="form-control transparent-input"
          name="country"
          placeholder="Country"
        />

        <button className="btn btn-secondary mb-2">Get Weather</button>
      </form>
    );
  }
}

export default Form;
