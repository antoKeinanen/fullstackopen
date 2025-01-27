function Weather({ weather }) {
  if (!weather) return <></>;

  const temp_c = (weather.main.temp - 272).toFixed(1);

  return (
    <>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature {temp_c}&deg;C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>Wind {weather.wind.speed} m/s</p>
    </>
  );
}

export default Weather;
