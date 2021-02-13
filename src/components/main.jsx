import React from "react";
import Header from "./Header";
import Chart from "./chart.jsx";
import Table from "./table";
import "./main.css";

function Main(props) {
  let background = "background-day";
  if (props.HeaderPart.current.is_day === "no") {
    background = "background-night";
  }

  return (
    <div className={background}>
      <Header data={props.HeaderPart} />
      <div className="chart-Container">
        <Chart data={props.chartData} />
        <Table  forCastData={props.forCastData} />

      </div>
    </div>
  );
}

export default Main;
