// Modo oscuro: guarda preferencia en localStorage para persistir entre páginas
const btnTheme = document.getElementById("btn-theme");
const body = document.body;

function applyThemeFromStorage() {
  const dark = localStorage.getItem("braill_dark") === "1";
  if (dark) body.classList.add("dark-mode");
  btnTheme.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

function toggleTheme() {
  body.classList.toggle("dark-mode");
  const darkNow = body.classList.contains("dark-mode");
  localStorage.setItem("braill_dark", darkNow ? "1" : "0");
  btnTheme.textContent = darkNow ? "☀️" : "🌙";
}

if (btnTheme) {
  btnTheme.addEventListener("click", toggleTheme);
}

// Aplicar al cargar
applyThemeFromStorage();
