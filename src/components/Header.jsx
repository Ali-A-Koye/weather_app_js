import React from "react";
import "./header.css";

export default class Header extends React.Component {
  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {
    const data = this.props.data;
    this.setState({ data, loading: false });
  }

  render() {
    return (
      <div class="conatiner">
        {this.state.loading ? (
          "loading..."
        ) : (
          <div class="forcast">
            <div class="location">
              <h1>{this.state.data.request.query}</h1>
              <p class="time">{this.state.data.location.localtime}</p>
            </div>
            <div class="info">
              <div class="current">
                <h1>{this.state.data.current.temperature} °C</h1>
                <p>{this.state.data.current.weather_descriptions[0]}</p>
              </div>
              <div class="info-list">
                <p>Wind speed : {this.state.data.current.wind_speed} Km/H</p>
                <p>Wind degree : {this.state.data.current.wind_degree}</p>
                <p>Wind direction : {this.state.data.current.wind_dir}</p>
                <p>Pressure : {this.state.data.current.pressure} mb</p>
                <p>Humidity : {this.state.data.current.humidity}</p>
                <p>Visibility : {this.state.data.current.visibility}</p>
              </div>
            </div>
            <img src={this.state.data.current.weather_icons[0]} alt="icon" />
          </div>
        )}
      </div>
    );
  }
}
