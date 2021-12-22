import { getWeather } from "../apiRequests"

export const addCityAction = (cityData) => (
    {
        type: "ADD_CITY",
        data: cityData
    }
)

export const resetCities = {
    type: "RESET_CITIES"
}

export const setCurrCity = (cityData) => (
    {
        type: "SET_CURRENT",
        data: cityData
    }
)

export const updateCities = () => (dispatch, getState) => {
    const cities = getState().weatherReducer.cities.map(city => city.name)
    dispatch(resetCities);
    for (let city of cities) {
        getWeather(city).then((value) => {
            dispatch(addCityAction(value.data))
        })
    }
}