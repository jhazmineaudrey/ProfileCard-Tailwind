const card = document.querySelector(".cards");
const darkBtn = document.querySelector("#DARK-MODE-TOGGLE");
const body = document.querySelector("body");

card.addEventListener("click", (event) => {
    card.classList.toggle("flipped");
});

darkBtn.addEventListener("click", () => {
    if (!(body.dataset.theme === "dark")) {
        body.dataset.theme = "dark"
    } else {
        body.dataset.theme = "light"
    }
})