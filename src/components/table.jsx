import React, {Fragment} from 'react'
import "./table.css"

export default function Table(props) {
  const data = props.forCastData;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var MinTemp = [];
  var MaxTemp = [];
  var Temp = [];
  var WindSpeed = [];
  var AirPressure = [];
  var Humidity = [];
  var Visiblity=[];
  var direction=[];
  var Datee = [];
  for (var i = 0; i < data["consolidated_weather"].length; i++) {
    MinTemp.push(data["consolidated_weather"][i]["min_temp"]);
    MaxTemp.push(data["consolidated_weather"][i]["max_temp"]);
    Temp.push(data["consolidated_weather"][i]["the_temp"]);
    WindSpeed.push(data["consolidated_weather"][i]["wind_speed"]);
    AirPressure.push(data["consolidated_weather"][i]["air_pressure"]);
    Humidity.push(data["consolidated_weather"][i]["humidity"]);
    Visiblity.push(data["consolidated_weather"][i]["visibility"]);
    direction.push(data["consolidated_weather"][i]["wind_direction_compass"]);
    Datee.push(
      days[new Date(data["consolidated_weather"][i]["applicable_date"]).getDay()]);
    }

    return (
      <Fragment>

      <div class="container">
      <div class="block_one">{Datee[0]}<br/>  Temperature: {Math.round(Temp[0]).toFixed(0)} °C<br/>
      Maximum Temperature: {Math.round(MaxTemp[0]).toFixed(0)} °C<br/>
      Minimum Temperature: {Math.round(MinTemp[0]).toFixed(0)} °C<br/> 
      Wind Speed: {Math.round(WindSpeed[0]).toFixed(0)} mph<br/>
     Air Pressure: {Math.round(AirPressure[0]).toFixed(0)} mb<br/>
     Visibility: {Math.round(Visiblity[0]).toFixed(0)} <br/>
     Humidity: {Math.round(Humidity[0]).toFixed(0)} <br/>
     Direction: {direction[0]} <br/>
     </div>

     <div class="block_two">{Datee[1]}<br/>  Temperature: {Math.round(Temp[1]).toFixed(0)} °C<br/>
     Maximum Temperature: {Math.round(MaxTemp[1]).toFixed(0)} °C<br/>
     Minimum Temperature: {Math.round(MinTemp[1]).toFixed(0)} °C<br/> 
     Wind Speed: {Math.round(WindSpeed[1]).toFixed(0)} mph<br/>
    Air Pressure: {Math.round(AirPressure[1]).toFixed(0)} mb<br/>
    Visibility: {Math.round(Visiblity[1]).toFixed(0)} <br/>
    Humidity: {Math.round(Humidity[1]).toFixed(0)} <br/>
    Direction: {direction[1]} <br/>
    </div>

    <div class="block_three">{Datee[2]}<br/>  Temperature: {Math.round(Temp[2]).toFixed(0)} °C<br/>
    Maximum Temperature: {Math.round(MaxTemp[2]).toFixed(0)} °C<br/>
    Minimum Temperature: {Math.round(MinTemp[2]).toFixed(0)} °C<br/> 
    Wind Speed: {Math.round(WindSpeed[2]).toFixed(0)} mph<br/>
   Air Pressure: {Math.round(AirPressure[2]).toFixed(0)} mb<br/>
   Visibility: {Math.round(Visiblity[2]).toFixed(0)} <br/>
   Humidity: {Math.round(Humidity[2]).toFixed(0)} <br/>
   Direction: {direction[2]} <br/>
   </div>

   <div  class="block_four">{Datee[3]}<br/>  Temperature: {Math.round(Temp[3]).toFixed(0)} °C<br/>
   Maximum Temperature: {Math.round(MaxTemp[3]).toFixed(0)} °C<br/>
   Minimum Temperature: {Math.round(MinTemp[3]).toFixed(0)} °C<br/> 
   Wind Speed: {Math.round(WindSpeed[3]).toFixed(0)} mph<br/>
  Air Pressure: {Math.round(AirPressure[3]).toFixed(0)} mb<br/>
  Visibility: {Math.round(Visiblity[3]).toFixed(0)} <br/>
  Humidity: {Math.round(Humidity[3]).toFixed(0)} <br/>
  Direction: {direction[3]} <br/>
  </div>

  <div  class="block_five">{Datee[4]}<br/>  Temperature: {Math.round(Temp[4]).toFixed(0)} °C<br/>
  Maximum Temperature: {Math.round(MaxTemp[4]).toFixed(0)} °C<br/>
  Minimum Temperature: {Math.round(MinTemp[4]).toFixed(0)} °C<br/> 
  Wind Speed: {Math.round(WindSpeed[4]).toFixed(0)} mph<br/>
 Air Pressure: {Math.round(AirPressure[4]).toFixed(0)} mb<br/>
 Visibility: {Math.round(Visiblity[4]).toFixed(0)} <br/>
 Humidity: {Math.round(Humidity[4]).toFixed(0)} <br/>
 Direction: {direction[4]} <br/>
 </div>

 <div  class="block_six">{Datee[5]}<br/>  Temperature: {Math.round(Temp[5]).toFixed(0)} °C<br/>
 Maximum Temperature: {Math.round(MaxTemp[5]).toFixed(0)} °C<br/>
 Minimum Temperature: {Math.round(MinTemp[5]).toFixed(0)} °C<br/> 
 Wind Speed: {Math.round(WindSpeed[5]).toFixed(0)} mph<br/>
Air Pressure: {Math.round(AirPressure[5]).toFixed(0)} mb<br/>
Visibility: {Math.round(Visiblity[5]).toFixed(0)} <br/>
Humidity: {Math.round(Humidity[5]).toFixed(0)} <br/>
Direction: {direction[5]} <br/>
</div>
</div>
        </Fragment>
    );
  }
