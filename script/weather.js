var citySelect = document.querySelector("#city-select");
var weatherBox = document.querySelector("#weather-box");

// 도시 선택값이 변경될 때 실행
citySelect.addEventListener("change", async function (event) {
  var selectedValue = event.target.value;

  // 기본 항목을 선택한 경우
  if (selectedValue === "none") {
    weatherBox.innerHTML = "<p>도시를 선택하면 날씨 정보가 표시됩니다.</p>";

    return;
  }

  // 선택한 값에서 위도와 경도 분리
  var coordinates = selectedValue.split(",");
  var latitude = coordinates[0];
  var longitude = coordinates[1];

  // 선택한 도시 이름 가져오기
  var cityName = citySelect.options[citySelect.selectedIndex].text;

  // 데이터를 받아오는 동안 로딩 문구 표시
  weatherBox.innerHTML = "<p>날씨 데이터를 불러오는 중... ⏳</p>";

  // Open-Meteo API 주소
  var apiUrl =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&current=temperature_2m,relative_humidity_2m";

  try {
    // Open-Meteo 서버에 비동기 요청
    var response = await fetch(apiUrl);

    // 서버 요청이 실패한 경우
    if (!response.ok) {
      throw new Error("날씨 서버 응답 오류");
    }

    // JSON 데이터를 JavaScript 객체로 변환
    var data = await response.json();

    // 현재 온도와 습도 가져오기
    var temperature = data.current.temperature_2m;
    var humidity = data.current.relative_humidity_2m;

    // 단위 가져오기
    var temperatureUnit = data.current_units.temperature_2m;

    var humidityUnit = data.current_units.relative_humidity_2m;

    // 실제 날씨 정보 출력
    weatherBox.innerHTML =
      "<h4>🌤️ " +
      cityName +
      " 실시간 날씨</h4>" +
      "<p>🌡️ 현재 온도: " +
      temperature +
      temperatureUnit +
      "</p>" +
      "<p>💧 현재 습도: " +
      humidity +
      humidityUnit +
      "</p>" +
      "<p>📍 위도: " +
      latitude +
      "</p>" +
      "<p>📍 경도: " +
      longitude +
      "</p>";
  } catch (error) {
    // 네트워크 또는 서버 오류 처리
    weatherBox.innerHTML = "<p>⚠️ 날씨 정보를 불러오지 못했습니다.</p>";

    console.error("날씨 데이터 오류:", error);
  }
});
