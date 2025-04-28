const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather-button');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const weatherCondition = document.getElementById('weather-condition');
const temperature = document.getElementById('temperature');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');
const weatherIcon = document.getElementById('weather-icon');
const cityError = document.getElementById('city-error');
const errorMessage = document.getElementById('error-message');

const apiKey = 'ca77553984e1a8ae4a10e01b78e8dea4'; // Replace with your real API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
  const city = cityInput.value.trim();

  if (city === '') {
    cityError.style.display = 'block';
    return;
  } else {
    cityError.style.display = 'none';
  }

  const url = `${weatherApiUrl}?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .then(data => {
      weatherInfo.style.display = 'block';
      errorMessage.style.display = 'none';

      cityName.textContent = data.name;
      weatherCondition.textContent = data.weather[0].description;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
      humidity.textContent = `${data.main.humidity}%`;
      windSpeed.textContent = `${data.wind.speed} m/s`;
      pressure.textContent = `${data.main.pressure} hPa`;

      const iconCode = data.weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      weatherIcon.alt = data.weather[0].description;
    })
    .catch(error => {
      console.error(error);
      weatherInfo.style.display = 'none';
      errorMessage.style.display = 'block';
    });
}

getWeatherButton.addEventListener('click', getWeather);
cityInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    getWeather();
  }
});
