import React from "react";
import "./Weather.css";
import FaSearch from "../components/img/search.png";
import cloud from "../components/img/cloud.png";
import clear from "../components/img/clear.png";
function Weather() {
   const weatherApp =()=>{
    let api_key="2853357830000ae313fcec7a4a299ad9"
   }
   const search =()=>{
    const element =document.getElementsByClassName("cityName")
    // console.log(element[0].value);
    if(element[0].value === 0){
      return 0;
    }
   }

  return (
    <div className="container ">
      <div className="search-box">
        <input type="text" placeholder="Enter the City" className="cityName"/>
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={FaSearch} alt="" />
        </div>
      </div>
      <div className="cloud-icon" >
        <img src={cloud} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
    </div>
  );
}

export default Weather;
