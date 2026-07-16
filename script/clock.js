var currentDate = document.querySelector("#current-date");
var currentTime = document.querySelector("#current-time");

function updateClock() {
  var now = new Date();

  var dateText = now.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  var timeText = now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  currentDate.textContent = dateText;
  currentTime.textContent = timeText;
}

updateClock();
setInterval(updateClock, 1000);
