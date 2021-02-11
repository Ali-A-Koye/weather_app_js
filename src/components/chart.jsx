import React from "react";
import _ from "lodash";
import { Line } from "react-chartjs-2";
import moment from "moment";

function Chart({ data }) {
  data = _.map(data, (el) => {
    el.created = moment(el.created).format("HH");
    return el;
  });
  data = _.uniqBy(data, "created");

  data = _.sortBy(data, "created");
  let Hours = _.map(data, "created");
  let theTemp = _.map(data, "the_temp");
  let maxTemp = _.map(data, "max_temp");
  let minTemp = _.map(data, "min_temp");
  let windSpeed = _.map(data, "wind_speed");

  const chartFunction = (canvas) => {
    return {
      labels: Hours,
      backgroundColor: "white",
      datasets: [
        {
          fillColor: "rgba(220,220,220,0)",
          strokeColor: "rgba(220,180,0,1)",
          fill: false,
          pointDotRadius: 10,
          bezierCurve: false,
          scaleShowVerticalLines: false,
          scaleGridLineColor: "black",
          borderColor: "rgb(25, 147, 0)",
          pointColor: "rgba(220,180,0,1)",
          label: "Wind Speed(MPH)",
          data: windSpeed,
        },
        {
          fillColor: "rgba(220,220,220,0)",
          strokeColor: "rgba(220,180,0,1)",
          fill: false,
          borderColor: "rgb(201, 27, 143)",
          pointColor: "rgba(220,180,0,1)",
          label: "Tempreture (°C) ",
          data: theTemp,
        },
        {
          fillColor: "rgba(220,220,220,0)",
          strokeColor: "rgba(220,180,0,1)",
          fill: false,
          label: "Max Temp(°C)",
          borderColor: "rgb(27, 143, 201)",
          pointColor: "rgba(220,180,0,1)",
          data: maxTemp,
        },
        {
          fillColor: "rgba(220,220,220,0)",
          strokeColor: "rgba(220,180,0,1)",
          fill: false,
          label: "Min Temp(°C)",
          borderColor: "rgb(201, 172, 27)",
          pointColor: "rgba(220,180,0,1)",
          data: minTemp,
        },
      ],
    };
  };
  return (
    <div>
      <div class="chart-container">
        <h1 style={{ paddingTop: "13px" }}>Overcast throughout the day</h1>
        <Line data={chartFunction} />
      </div>
      This is Main
    </div>
  );
}

export default Chart;
