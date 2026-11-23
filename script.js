
const languageButton = document.getElementById("languageButton");
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

let currentLanguage = "en";

languageButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "sr" : "en";

    document.querySelectorAll("[data-en]").forEach(element => {
        element.textContent = element.dataset[currentLanguage];
    });

    languageButton.textContent = currentLanguage === "en" ? "SR" : "EN";
    document.documentElement.lang = currentLanguage;
});

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
