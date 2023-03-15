import { linkBtn } from "../components/linkBtn.js";
const btnGroup = document.querySelector('#btn-group');

const loginBtn = linkBtn('/login', 'indigo', 'login');

const signupBtn = linkBtn('/registro', 'slate', 'Registro');

btnGroup.append(loginBtn, signupBtn);

console.log(btnGroup);