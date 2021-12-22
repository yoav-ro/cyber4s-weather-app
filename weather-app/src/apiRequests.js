require('dotenv').config({ path: "../.env" })
const axios = require("axios")
const apiKey = process.env.WEATHER_KEY;

async function getWeather(city) {
    try {
        const req = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        return req;
    }
    catch(err){
        return err.response.data;
    }
}


module.exports={
    getWeather
}