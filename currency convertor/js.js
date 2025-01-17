const baseURL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let ansBox = document.querySelector(".ans");
let form = document.querySelector("form");
let fromImg = document.querySelector(".fromImg");
let toImg = document.querySelector(".toImg");
let valu = document.querySelector(".amount input").value;
let submi = document.querySelector(".submi");
document.querySelector(".amount input").value = "1";
for (let name in countryList) {
  if (name === "usd") from.innerHTML += `<option selected>${name}</option>`;
  else from.innerHTML += `<option>${name}</option>`;
  if (name === "pkr") to.innerHTML += `<option selected>${name}</option>`;
  else to.innerHTML += `<option>${name}</option>`;
}
from.addEventListener("change", () => {
  fromImg.src = `https://flagsapi.com/${countryList[
    from.value
  ].toUpperCase()}/shiny/64.png`;
});
to.addEventListener("change", () => {
  toImg.src = `https://flagsapi.com/${countryList[
    to.value
  ].toUpperCase()}/shiny/64.png`;
});
submi.addEventListener("click", (event) => {
  // console.log(event);
  event.preventDefault();
  fetchapi();
});
const swapBtn = document.querySelector(".swapBtn");
swapBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let temp1 = fromImg.src;
  fromImg.src = toImg.src;
  toImg.src = temp1;
  let temp2 = from.value;
  from.value = to.value;
  to.value = temp2;
  fetchapi();
  console.log("Swap button clicked");
});
// from.value = "usd";
// to.value = "pkr";
async function fetchapi() {
  valu = document.querySelector(".amount input").value;
  let v1 = from.value;
  let v2 = to.value;
  const response = await fetch(`${baseURL}/${v1}.json`);
  const javaScriptObj = await response.json();
  const toCurrencyRates = javaScriptObj[v1];
  const exchangeRates = toCurrencyRates[v2];
  // let num = 1000000;
  let formatter = new Intl.NumberFormat("en-US");
  // let formatted = formatter.format(valu);
  ansBox.innerHTML = `<p>${formatter.format(
    valu
  )} ${from.value.toUpperCase()} = ${formatter.format(
    exchangeRates * valu
  )} ${to.value.toUpperCase()}</p>`;
}
form.addEventListener("keydown", (event) => {
  // Check if Enter key is pressed
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission
    fetchapi();
    // Programmatically trigger the second button
  }
});
fetchapi();
