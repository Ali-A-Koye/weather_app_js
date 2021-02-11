import React, { useState } from "react";
import axios from "axios";
import MainComponenet from "./main.jsx";
import moment from "moment";
function Dashboard() {
  const [results, setResults] = useState([]);
  const [overlayDiv, setOverlayDiv] = useState(false);
  const [goToMain, SetGoToMain] = useState(false);
  const [input, setInput] = useState([]);
  const [searchText, setSearchText] = useState("Search");
  const [Images, setImages] = useState([]);

  const [forCastData, setForCastData] = useState();
  const [HeaderPart, setHeaderPart] = useState();
  const [chartData, setChartData] = useState();

  async function fetchData() {
    setOverlayDiv(true);
    setSearchText("Loading...");
    if (input.length < 1) {
      setOverlayDiv(false);
      return setSearchText("2 Charc Required For Search...");
    }
    const result = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${
        input.length > 1 ? input : ""
      }`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (result.data.length > 0) {
      let arr = [];
      for (const [i] of result.data.entries()) {
        const image = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&query=${result.data[i].title}&client_id=HCI-O91aDEHQTdfYiF5pBy6UTGvrlmzQOWXoMDLk3iA&per_page=1`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        arr.push(image.data.results[0].urls.regular);
      }
      setImages(arr);
    }
    setOverlayDiv(false);
    setSearchText("Search Again");
    setResults(result.data);
  }

  async function cityClicked(event, v) {
    setOverlayDiv(true);
    const forCast = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/api/location/${v.woeid}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const Header = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=e439de947ffee26b8f766364f87e9a2c&query=${v.title}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    let date = new Date();
    const chart = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${
        v.woeid
      }/${moment(date).format("YYYY")}/${moment(date).format("MM")}/${moment(
        date
      ).format("DD")}/`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    setForCastData(forCast.data);
    setHeaderPart(Header.data);
    setChartData(chart.data);
    SetGoToMain(true);
  }
  let overlay;

  if (overlayDiv) overlay = <div id="overlayDiv"></div>;

  return (
    <div>
      {!goToMain && (
        <div className="welcome-component">
          {overlay}
          <div>
            <h1 id="SearchTitle">Weather App</h1>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type City Name...."
            />
            <button onClick={fetchData} id="Search">
              {searchText}
            </button>
          </div>
          <ul>
            {results.map((el, i) => {
              return (
                <li>
                  <button
                    style={{
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundImage: `url(${Images[i]})`,
                    }}
                    className="items"
                    key={i}
                    onClick={(e) => cityClicked(e, el)}
                  >
                    {el.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {goToMain && (
        <MainComponenet
          forCastData={forCastData}
          HeaderPart={HeaderPart}
          chartData={chartData}
        />
      )}
    </div>
  );
}

export default Dashboard;
