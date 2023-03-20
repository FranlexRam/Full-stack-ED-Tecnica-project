import { linkBtn } from "../components/linkBtn.js";
const btnGroup = document.querySelector('#btn-group');

const loginBtn = linkBtn('/login', 'indigo', 'login');

const signupBtn = linkBtn('/registro', 'slate', 'Registro');

btnGroup.append(loginBtn, signupBtn);

console.log(btnGroup);

const element = document.querySelector('#homeEntrance');
element.addEventListener('animationend', () => {
  // do something
  const menuH1 = element.children[0];
  const menuP1 = element.children[1];
  menuH1.classList.remove('animate__animated');
  menuP1.classList.remove('animate__animated');
  console.log(menuH1);
  console.log(menuP1);
});