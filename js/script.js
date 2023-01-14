const mainContainer = document.querySelector(".main-container");
const secondContainer = document.querySelector(".message");
const btnSubmit = document.querySelector(".btn-submit");
const btns = document.querySelectorAll(".btn");
const rating = document.querySelector("#rating");
const rateAgain = document.querySelector("#rate-again");

btnSubmit.addEventListener("click", function () {
    mainContainer.classList.add("active");
    secondContainer.classList.remove("active");
});

rateAgain.addEventListener("click", function () {
    mainContainer.classList.remove("active");
    secondContainer.classList.add("active");
});

btns.forEach(rateBtn => {
    rateBtn.addEventListener("click", function () {
        rating.innerHTML = rateBtn.innerHTML;
    });
});

