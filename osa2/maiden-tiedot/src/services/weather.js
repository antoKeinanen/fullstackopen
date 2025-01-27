import axios from "axios";

function getWeather(city) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`
  );
}

export default {
  getWeather,
};
