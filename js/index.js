const pagerDisplay = document.getElementById("pager-display");
const phoneDisplay = document.getElementById("phone-display");
const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");
const key3 = document.getElementById("key3");
const key4 = document.getElementById("key4");
const key5 = document.getElementById("key5");
const key6 = document.getElementById("key6");
const key7 = document.getElementById("key7");
const key8 = document.getElementById("key8");
const key9 = document.getElementById("key9");
const key10 = document.getElementById("key10");
const key11 = document.getElementById("key11");
const key12 = document.getElementById("key12");

btnReset = document.getElementById("btn-reset");
btnSend = document.getElementById("btn-send");

key1.addEventListener("click", () => {
  phoneDisplay.innerText += "1";
});
key2.addEventListener("click", () => {
  phoneDisplay.innerText += "2";
});
key3.addEventListener("click", () => {
  phoneDisplay.innerText += "3";
});
key4.addEventListener("click", () => {
  phoneDisplay.innerText += "4";
});
key5.addEventListener("click", () => {
  phoneDisplay.innerText += "5";
});
key6.addEventListener("click", () => {
  phoneDisplay.innerText += "6";
});
key7.addEventListener("click", () => {
  phoneDisplay.innerText += "7";
});
key8.addEventListener("click", () => {
  phoneDisplay.innerText += "8";
});
key9.addEventListener("click", () => {
  phoneDisplay.innerText += "9";
});
key10.addEventListener("click", () => {
  phoneDisplay.innerText += "*";
});
key11.addEventListener("click", () => {
  phoneDisplay.innerText += "0";
});
key12.addEventListener("click", () => {
  phoneDisplay.innerText += "#";
});
btnReset.addEventListener("click", () => {
  phoneDisplay.innerText = "";
  pagerDisplay.innerText = "";
});

btnSend.addEventListener("click", () => {
  // added a delay
  setTimeout(function () {
    pagerDisplay.innerText = phoneDisplay.innerText;
    if ((phoneDisplay.innerText = pagerDisplay.innerText)) {
      document.getElementById("pager-sound").play();
    }
    phoneDisplay.innerText = "";
  }, 1000);
});
