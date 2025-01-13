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
  localStorage.clear();
  location.reload(true);
}

callLogOut.addEventListener("click", () => ctrlDial("0"));
btnCancel.addEventListener("click", () => ctrlDial("100vh"));
btnLogout.addEventListener("click", excuteLogout);
