import "./styles.css";
import { divContent, homeContent } from "./home.js";
import  { menuContent } from "./menu.js";
import html from "./template.html";

console.log(divContent);
homeContent();


const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnAbout = document.querySelector("#btn-about");



btnHome.addEventListener('click', homeContent);
btnMenu.addEventListener('click', menuContent)

