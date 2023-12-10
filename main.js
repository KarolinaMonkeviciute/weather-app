const apiKey = "6583d24f7147d6e9f61a1701ddc1c8b9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=" +
  apiKey +
  "&units=metric&q=";

const searchBox = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const weatherImg = document.getElementById("weather=img");
async function weather(city) {
  const response = await fetch(apiUrl + city);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".box").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
  }
  let data = await response.json();

  console.log(data);

  document.getElementById("location").innerText = data.name;
  document.getElementById("temperature").innerText =
    Math.round(data.main.temp) + " °C";
  document.getElementById("feels").innerText =
    Math.round(data.main.feels_like) + " °C";
  document.getElementById("wind").innerText = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clouds") {
    weatherImg.src = "./images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherImg.src = "./images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherImg.src = "./images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "./images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherImg.src = "./images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherImg.src = "./images/snow.png";
  } else {
    weatherImg.src = "./images/clear.png";
  }

  document.querySelector(".box").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  weather(searchBox.value);
});
