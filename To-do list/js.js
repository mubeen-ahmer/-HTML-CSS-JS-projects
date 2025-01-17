let todos = JSON.parse(localStorage.getItem("todo")) || [];
let list = document.querySelector("ul");
let addBtn = document.querySelector(".inputBox button");

function render() {
  list.innerHTML = "";
  todos.forEach((todo, i) => {
    let to = document.createElement("li");
    to.innerHTML = `<p class="p${i}">${todo}</p><button onclick="edit(${i})"><i class="fa-solid fa-pen"></i></button><button class="del" onclick="del(${i})"><i class="fa-solid fa-xmark"></i></button>`;
    list.append(to);
  });
}

function addi() {
  let inputData = document.querySelector(".inputBox input").value;
  let a = inputData.trim();
  if (inputData == "") alert("please write your task first");
  else {
    todos.push(a);
    addnoti();
  }
  localStorage.setItem("todo", JSON.stringify(todos));
  render();
}
function del(i) {
  todos.splice(i, 1);
  render();
  delnoti();
  localStorage.setItem("todo", JSON.stringify(todos));
}
function edit(i) {
  let p = document.querySelector(`.p${i}`).textContent;
  todos.splice(i, 1);
  render();
  localStorage.setItem("todo", JSON.stringify(todos));
  document.querySelector(".inputBox input").value = p;
  // console.log(p);
}

addBtn.addEventListener("click", () => {
  addi();

  document.querySelector(".inputBox input").value = "";
});

addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addi();
    document.querySelector(".inputBox input").value = "";
  }
});
let notiban = document.querySelector(".notification");
function addnoti() {
  notiban.classList.remove("show");
  void notiban.offsetWidth;
  notiban.classList.add("show");
}
let notiban2 = document.querySelector(".notification2");
function delnoti() {
  notiban2.classList.remove("show");
  void notiban2.offsetWidth;
  notiban2.classList.add("show");
}

render();
