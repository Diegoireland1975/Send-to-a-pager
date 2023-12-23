const pagerDisplay = document.getElementById("pager-display");
const phoneDisplay = document.getElementById("phone-display");
const numberEls = document.getElementsByClassName("number");

btnReset = document.getElementById("btn-reset");
btnSend = document.getElementById("btn-send");

Array.from(numberEls).forEach((numberEl) =>
  numberEl.addEventListener("click", handleNumberClick)
);

function handleNumberClick(e) {
  phoneDisplay.textContent += e.target.textContent;
}
btnReset.addEventListener("click", () => {
  phoneDisplay.textContent = "";
  pagerDisplay.textContent = "";
});

btnSend.addEventListener("click", () => {
  if (phoneDisplay.textContent !== "") {
    // added a delay
    setTimeout(function () {
      pagerDisplay.textContent = phoneDisplay.textContent;
      document.getElementById("pager-sound").play();
      phoneDisplay.textContent = "";
    }, 1000);
  }
});
