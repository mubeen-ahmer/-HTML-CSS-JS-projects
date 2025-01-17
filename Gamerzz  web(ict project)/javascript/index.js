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
let count1 = 0;
let img1 = document.querySelector(".simple .box1 .img1");
function animator1() {
  if (count1 % 2 == 0) {
    img1.classList.add("animation");
    count1++;
  } else {
    img1.classList.remove("animation");
    count1++;
  }
}
let count2 = 0;
let img2 = document.querySelector(".simple .box1 .img2");
function animator2() {
  if (count2 % 2 == 0) {
    img2.classList.add("animation");
    count2++;
  } else {
    img2.classList.remove("animation");
    count2++;
  }
}
let count3 = 0;
let img3 = document.querySelector(".simple .box2 .img3");
function animator3() {
  if (count3 % 2 == 0) {
    img3.classList.add("animation");
    count3++;
  } else {
    img3.classList.remove("animation");
    count3++;
  }
}
let count4 = 0;
let img4 = document.querySelector(".simple .box2 .img4");
function animator4() {
  if (count4 % 2 == 0) {
    img4.classList.add("animation");
    count4++;
  } else {
    img4.classList.remove("animation");
    count4++;
  }
}
