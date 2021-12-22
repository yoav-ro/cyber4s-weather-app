import React from "react";
import { kelvinToC } from "../utils";
import { useDispatch } from "react-redux";
import { setCurrCity } from "../actions/actions";
import "../css/cityLi.css"

export default function CityLi({ city }) {
    const dispatch= useDispatch()

    const handleClick = () => {
        dispatch(setCurrCity(city))
    }

    return (
        <li className="cityLi" onClick={handleClick}>{city.name} | {Math.round(kelvinToC(city.main.temp))}°C</li>
    )
}