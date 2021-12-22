import React from "react";
import { useSelector } from "react-redux";
import CityLi from "./cityLi";

const ulStyle={
    fontSize: "larger",
}

export default function History() {
    const cities = useSelector(state => state.weatherReducer.cities);

    return (
        <ul style={ulStyle}>
            {cities.map((city, key) => {
                return (
                    <CityLi city={city} key={key} />
                )
            })}
        </ul>
    )
}