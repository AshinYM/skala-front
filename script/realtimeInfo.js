// weatherAPI.js에서 날씨 데이터 요청 함수 가져오기
import { getLiveWeather } from "./weatherAPI.js";

var citySelect = document.querySelector("#city-select");
var weatherBox = document.querySelector("#weather-box");

// 도시가 변경될 때 실행
citySelect.addEventListener("change", async function (event) {
  var selectedValue = event.target.value;

  // 기본 항목을 선택한 경우
  if (selectedValue === "none") {
    weatherBox.innerHTML = "<p>도시를 선택하면 날씨 정보가 표시됩니다.</p>";

    return;
  }

  // 위도와 경도 분리
  var coordinates = selectedValue.split(",");
  var latitude = coordinates[0];
  var longitude = coordinates[1];

  // 선택한 도시 이름 가져오기
  var cityName = citySelect.options[citySelect.selectedIndex].text;

  // 데이터 수신 전 로딩 문구 표시
  weatherBox.innerHTML = "<p>날씨 데이터를 불러오는 중... ⏳</p>";

  // weatherAPI.js의 함수 실행
  var weatherData = await getLiveWeather(latitude, longitude);

  // 데이터를 받아오지 못한 경우
  if (weatherData === null) {
    weatherBox.innerHTML = "<p>⚠️ 날씨 정보를 불러오지 못했습니다.</p>";

    return;
  }

  // 화면에 실시간 날씨 출력
  weatherBox.innerHTML =
    "<h4>🌤️ " +
    cityName +
    " 실시간 날씨</h4>" +
    "<p>🌡️ 현재 온도: " +
    weatherData.temperature +
    weatherData.temperatureUnit +
    "</p>" +
    "<p>💧 현재 습도: " +
    weatherData.humidity +
    weatherData.humidityUnit +
    "</p>" +
    "<p>📍 위도: " +
    latitude +
    "</p>" +
    "<p>📍 경도: " +
    longitude +
    "</p>";
});
