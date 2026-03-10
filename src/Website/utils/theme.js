export function setTheme(mode) {
  if (mode === "dark") {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", mode);
}

export function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) setTheme(saved);
}