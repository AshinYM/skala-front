var themeToggle = document.querySelector("#theme-toggle");
var savedTheme = localStorage.getItem("theme");

// 이전에 선택한 테마 다시 적용
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// 현재 상태에 맞춰 버튼 글자 변경
function updateThemeButton() {
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ 라이트 모드";
  } else {
    themeToggle.textContent = "🌙 다크 모드";
  }
}

updateThemeButton();

// 버튼을 누를 때 테마 전환
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateThemeButton();
});
