let inputData = document.querySelector("#input-counter");
let allInput = document.querySelector(".start-box");
let startCounter = document.querySelector("#start-counter");
let errorMessage = document.querySelector("#error-message");
let numberCounting = document.querySelector(".number");
let allMessage = document.querySelector(".message");
let loadingMessage = document.querySelector(".loading");
let successMessage = document.querySelector(".success");
let timerCircle = document.querySelector(".c100");
numberCounting.textContent = 0;

startCounter.addEventListener("click", function (e) {
  let second = Number(inputData.value);
  if (isNaN(second)) {
    errorMessage.textContent = "لطفا زمان را درست انتخاب کنید";
  } else {
    errorMessage.textContent = "";
    numberCounting.textContent = second;
    let originalSecond = second;
    let lastPercent = "";
    let timeId = setInterval(() => {
      if (lastPercent) timerCircle.classList.remove(lastPercent);
      numberCounting.textContent -= 1;
      let percent = Math.abs(Math.floor(((originalSecond - numberCounting.textContent) / originalSecond) * 100) - 100);
      lastPercent = `p${percent}`;
      timerCircle.classList.add(`p${percent}`);
      if (Number(numberCounting.textContent) == 0) {
        clearInterval(timeId);
        timerCircle.classList.remove(lastPercent);
      }
      if (numberCounting.textContent != 0) {
        loadingMessage.textContent = "در حال اجرا ...";
        successMessage.textContent = "";
      } else if (numberCounting.textContent == 0) {
        successMessage.textContent = "شمارنده با موفقیت به پایان رسید";
        loadingMessage.textContent = "";
      }
      if (numberCounting.textContent != 0) {
        allInput.classList.add("none");
        inputData.value = "";
      } else if (numberCounting.textContent == 0) {
        allInput.classList.remove("none");
      }
    }, 200);
  }
});
