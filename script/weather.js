var citySelect = document.querySelector("#city-select");
var weatherBox = document.querySelector("#weather-box");

// 도시 선택값이 바뀔 때마다 실행
citySelect.addEventListener("change", function (event) {
  var selectedValue = event.target.value;

  // 기본 항목을 선택한 경우
  if (selectedValue === "none") {
    weatherBox.innerHTML = "<p>도시를 선택하면 위치 정보가 표시됩니다.</p>";

    return;
  }

  // 쉼표를 기준으로 위도와 경도 분리
  var coordinates = selectedValue.split(",");
  var latitude = coordinates[0];
  var longitude = coordinates[1];

  // 선택된 option의 화면 표시 문구 가져오기
  var cityName = citySelect.options[citySelect.selectedIndex].text;

  // 도시 정보를 화면에 출력
  weatherBox.innerHTML =
    "<h4>📍 " +
    cityName +
    " 위치 정보</h4>" +
    "<p>위도: " +
    latitude +
    "</p>" +
    "<p>경도: " +
    longitude +
    "</p>";
});
