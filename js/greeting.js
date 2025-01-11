const loginForm = document.querySelector("#frmLogin");
const loginInput = document.querySelector("#frmLogin input");
const divForm = document.querySelector("article#divForm");
const divGreeting = document.querySelector("article#divGreeting");
const greeting = document.querySelector("h1#greeting");
const savedUsername = localStorage.getItem("username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  divForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGrettings(username);
}

function stringSwitch() {
  const date = new Date();
  const strHour = date.getHours();

  if (strHour < 12 && strHour > 4) {
    return "morning";
  } else if (strHour < 19) {
    return "afternoon";
  } else {
    return "evening";
  }
}

function paintGrettings(username) {
  greeting.innerText = `Good ${stringSwitch()}! ${username}`;
  divGreeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  divForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGrettings(savedUsername);
}
