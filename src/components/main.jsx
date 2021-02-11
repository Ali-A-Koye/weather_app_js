import React from 'react';
import Chart from './chart.jsx'
function Main(props) {
    console.log(props);
    return (
        <div>
            <Chart data={props.chartData} />
        </div>
    );
}

export default Main;