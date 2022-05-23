const weather = document.querySelector(".weather_data span:first-child");
const city = document.querySelector(".weather_data span:nth-child(2)");
const ApiKey = "c49f5d23a59ca4bcc0af83891509649b";

function onGeo_locOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      city.style.fontFamily = "-apple-system";
      city.style.fontSize = "17px";
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}ﾟC`;
      weather.style.fontFamily = "'Concert One', cursive";
      weather.style.fontSize = "19px"
    });
}
function onGeo_locError() {
  alert("Can't find your Location, Neither your weather and Location.");
}


navigator.geolocation.getCurrentPosition(onGeo_locOk, onGeo_locError);