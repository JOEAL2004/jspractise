const darkBtn = document.querySelector("#dark");
const lightBtn = document.querySelector("#bright");
const heading = document.querySelector("#head");

// Read saved theme
let theme = localStorage.getItem("theme");

// If no theme is stored, use light mode
if (!theme) {
    theme = "light";
    localStorage.setItem("theme", theme);
}

// Apply theme
function applyTheme(theme) {

    if (theme === "dark") {
        document.body.className = "dark";
        heading.textContent = "Theme - Dark";
        heading.style.color = "white";
    } else {
        document.body.className = "light";
        heading.textContent = "Theme - Light";
        heading.style.color = "black";
    }
}

// Apply saved theme on page load
applyTheme(theme);

// Dark button
darkBtn.addEventListener("click", () => {

    localStorage.setItem("theme", "dark");

    applyTheme("dark");

});

// Light button
lightBtn.addEventListener("click", () => {

    localStorage.setItem("theme", "light");

    applyTheme("light");

});