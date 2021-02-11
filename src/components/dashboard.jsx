import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainComponenet from './main.jsx'
function Dashboard() {
    const [results, setResults] = useState([]);
    const [overlayDiv, setOverlayDiv] = useState(false);
    const [goToMain, SetGoToMain] = useState(true);
    const [input, setInput] = useState([]);
    const [searchText, setSearchText] = useState("Search");



    const [forCastData, setForCastData] = useState();
    const [HeaderPart, setHeaderPart] = useState();
    const [chartData, setChartData] = useState();

    async function fetchData() {
        setSearchText("Loading...")
        if (input.length < 1) return setSearchText("2 Charc Required For Search...")
        const result = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${input.length > 1 ? input : ""}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
        setSearchText("Search Again")
        setResults(result.data);
    }

    async function cityClicked(event, v) {
        setOverlayDiv(true);
        const forCast = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/api/location/${v.woeid}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        const Header = await axios.get(
            `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=e439de947ffee26b8f766364f87e9a2c&query=${v.title}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })

        const chart = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/2013/4/27/`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })

        setForCastData(forCast.data)
        setHeaderPart(Header.data)
        setChartData(chart.data);
        SetGoToMain(true);

    }
    let overlay;

    if (overlayDiv) overlay = <div id="overlayDiv"></div>;

    return (
        <div>
            { !goToMain && <div className="welcome-component">
                {overlay}
                <div>
                    <h1>Weather App </h1>
                    <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="City Name" />
                    <button onClick={fetchData} id="Search">{searchText}</button>
                </div>
                <ul>
                    {results.map((el, i) => {
                        return <li><button className="items" key={i} onClick={e => cityClicked(e, el)}>{el.title}</button></li>
                    })}
                </ul>

            </div>
            }
            {goToMain && <MainComponenet forCastData={forCastData} HeaderPart={HeaderPart} chartData={chartData} />}
        </div>
    );
}

export default Dashboard;