const initialState = {
    cities: [],
    currCity: {}
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CITY":
            const newCityData = action.data
            return { cities: [...state.cities, newCityData], currCity: newCityData }
        case "SET_CURRENT":
            return { cities: state.cities, currCity: action.data }
        case "UPDATE_CITIES":
            break;
        case "RESET_CITIES":
            return { cities: [], currCity: state.currCity }
        default:
            return state;
    }
}