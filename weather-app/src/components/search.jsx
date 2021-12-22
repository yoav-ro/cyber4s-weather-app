import React, { useState } from "react";
import { setCurrCity, addCityAction, updateCities } from "../actions/actions"
import store from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../apiRequests"


const divStyle = {
    borderBottom: "2px solid black",
    paddingBottom: "10px",
}
export default function SearchCity() {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const cities = useSelector(state => state.weatherReducer.cities);
    const cityNames = cities.map(city => city.name.toLowerCase())

    const handleClick = () => {
        getWeather(city).then((value) => {
            if (!cityNames.includes(city.toLowerCase())) {
                const action = addCityAction(value.data)
                dispatch(action);
            }
            dispatch(setCurrCity(value.data))
            dispatch(updateCities())
        })
        setCity("")
    }

    return (
        <div style={divStyle}>
            <input type="text" value={city} placeholder="Search city" onChange={(e) => { setCity(e.target.value) }} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}