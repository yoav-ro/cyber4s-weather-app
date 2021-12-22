require('dotenv').config({ path: "../.env" })
const axios = require("axios")
const apiKey = process.env.WEATHER_KEY;
// const apiKey="1ae82b3204071ebdcedd698e8f77189e";

async function getWeather(city) {
    try {
        const req = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        return req;
    }
    catch(err){
        throw err.response.data;
    }
}


module.exports={
    getWeather
}