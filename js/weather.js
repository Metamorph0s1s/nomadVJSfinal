const API_KEY = "399f087faff6b9344b33ca594e6bc6bf";

function onGeoOk(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const divWeather = document.querySelector("div#weather");
      const divDeg = document.querySelector("div#weather span:first-child");
      const feelsLike = document.querySelector("div#weather span:last-child");
      const wIco = document.createElement("img");
      wIco.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      wIco.alt = `${data.weather[0].description}`;

      divWeather.prepend(wIco);
      divDeg.innerText = `${data.main.temp}°C`;
      feelsLike.innerText = `feels like (${data.main.feels_like}°C)`;
    });
}

function onGeoError() {
  alert("Can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
