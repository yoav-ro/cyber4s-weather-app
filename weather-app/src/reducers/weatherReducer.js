const initalState = []

export default function weatherReducer(state = initalState, action) {
    switch (action.type) {
        case "ADD_CITY":
            const newCityData = {}
            return [...state, newCityData]
        default:
            return state;
    }
}