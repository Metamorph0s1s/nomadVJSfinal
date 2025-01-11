const frmLogin = document.querySelector("form#frmLogin");
const loginInput = document.querySelector("form#frmLogin input");
const divFrmLogin = document.querySelector("div#divFrmLogin");
const greeting = document.querySelector("h1#greeting");
const savedUsername = localStorage.getItem("username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  divFrmLogin.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGrettings(username);
}

function stringSwitch() {
  const date = new Date();
  const strHour = date.getHours();

  if (strHour < 12 && strHour > 4) {
    return "morning";
  } else if (strHour < 19 && strHour > 11) {
    return "afternoon";
  } else {
    return "evening";
  }
}

function paintGrettings(username) {
  greeting.innerText = `Good ${stringSwitch()}! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    divFrmLogin.classList.remove(HIDDEN_CLASSNAME);
    frmLogin.addEventListener("submit", onLoginSubmit);
} else {
  paintGrettings(savedUsername);
}
