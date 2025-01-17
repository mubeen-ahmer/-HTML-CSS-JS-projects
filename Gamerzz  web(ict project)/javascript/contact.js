let content = document.querySelector(".dropmenu .button .content");
let count = 0;
function appear() {
  if (count % 2 == 0) {
    content.style.display = "block";
    count++;
  } else if (count % 2 == 1) {
    content.style.display = "none";
    count++;
  }
}
