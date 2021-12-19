const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:nth-child(2)");
const temperature = document.querySelector("#weather span:last-child");

const API_KEY = "5b68d81c3f0926db5f7f69a1ddd54d63";

function onGeoOk(position) {
  const coords = position.coords;
  const [lat, lon] = [coords.latitude, coords.longitude];
  onRequest(lat, lon);
}
function onGeoError(err) {
  alert("위치 정보를 읽어올 수 없습니다.");
}

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onRequest(lat, lon) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const nowWeather = data.weather[0].main;
      const temp = parseInt(data.main.temp);
      weather.textContent = name;
      city.textContent = nowWeather;
      temperature.textContent = temp;
    });
}
