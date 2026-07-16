// Open-Meteo에서 날씨 데이터를 가져오는 함수
export async function getLiveWeather(latitude, longitude) {
  var apiUrl =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&current=temperature_2m,relative_humidity_2m";

  try {
    var response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("날씨 서버 응답 오류");
    }

    var data = await response.json();

    return {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      temperatureUnit: data.current_units.temperature_2m,
      humidityUnit: data.current_units.relative_humidity_2m,
    };
  } catch (error) {
    console.error("날씨 API 오류:", error);

    return null;
  }
}
