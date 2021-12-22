import React from "react";
import { useSelector } from "react-redux";
import { kelvinToC } from "../utils";

const divStyle = {
    borderRight: "solid",
    height: "57vh",
    fontSize: "larger",
}

export default function City({ cityName }) {
    const city = useSelector(state => state.weatherReducer.currCity)

    if (Object.keys(city).length !== 0) {
        return (
            <div style={divStyle}>
                <h1>{city.name} | {city.sys.country}</h1>
                <img style={{ float: "right" }} src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
                <h4>Current temperture: {Math.round(kelvinToC(city.main.temp))}°C</h4>
                <h4>{city.weather[0].description}</h4>
                <h4>Wind: {city.wind.speed}m/s</h4>
            </div>
        )
    }
    return <div style={divStyle}></div>
}