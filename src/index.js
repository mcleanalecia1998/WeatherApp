function currentTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature} ⁰F`;

  let descriptionElement = document.querySelector("#current-description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#current-humidity");
  let humidity = Math.round(response.data.temperature.humidity);
  humidityElement.innerHTML = `Humidity: ${humidity}%`;

  let windElement = document.querySelector("#current-wind");
  let wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = `Wind: ${wind} mph`;

  let feelElement = document.querySelector("#feels-like");
  let feel = response.data.temperature.feels_like;
  feelElement.innerHTML = `Feels like: ${feel}`;

  let pressureElement = document.querySelector("#pressure");
  let pressure = Math.round(response.data.temperature.pressure);
  pressureElement.innerHTML = `Pressure: ${pressure} hPa`;
}

function nameCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h2 = document.querySelector("h2");
  let city = cityInput.value;
  let apiKey = "0fdf50965521a4dae377bbta1o61b23c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  h2.innerHTML = city;
  axios.get(apiUrl).then(currentTemperature);
}

let cityForm = document.querySelector(".search-form");
cityForm.addEventListener("submit", nameCity);

//Time
function time() {
  let h3 = document.querySelector("h3");
  let now = new Date();
  let hour = now.getHours();
  let amOrPm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12;

  let minute = now.getMinutes().toString().padStart(2, "0");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  h3.innerHTML = `${day} ${hour}:${minute}${amOrPm} `;
}

time();
