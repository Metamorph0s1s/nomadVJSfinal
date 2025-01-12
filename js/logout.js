const callLogOut = document.querySelector("#logout");
const dialog = document.querySelector("#dialogContainer");
const btnCancel = document.querySelector("#btnCancel");
const btnLogout = document.querySelector("#btnLogout");

const HIDDEN_CLASS = "hidden";

function ctrlDial(value) {
  callLogOut.classList.toggle(HIDDEN_CLASSNAME);
  dialog.style.top = value;
}

function excuteLogout() {
  const fileNames = [
    "0.webp",
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
  ];
  const imgName = fileNames[parseInt(Math.random() * fileNames.length)];

  const bgImg = document.querySelector("#bg");
  bgImg.src = `asset/${imgName}`;

  const liTodo = document.querySelectorAll("#listTodo > li");
  liTodo.forEach((li) => {
    li.remove();
  });

  const divFrmLogin = document.querySelector("div#divFrmLogin");
  const greeting = document.querySelector("h1#greeting");

  divFrmLogin.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);

  localStorage.clear();

  callLogOut.classList.add(HIDDEN_CLASSNAME);
  dialog.style.top = "100vh";
}

callLogOut.addEventListener("click", () => ctrlDial("0"));
btnCancel.addEventListener("click", () => ctrlDial("100vh"));
btnLogout.addEventListener("click", excuteLogout);
