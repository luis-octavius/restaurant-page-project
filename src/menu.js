import { divContent } from "./home.js";
import img1 from "./assets/brookelark.jpg";
import img2 from "./assets/brookelark2.jpg";
import img3 from "./assets/odiseocastrejon.jpg";

const imgMenu1 = new Image ();
const imgMenu2 = new Image ();
const imgMenu3 = new Image ();

imgMenu1.src = img1;
imgMenu2.src = img2;
imgMenu3.src = img3;


export function menuContent () {
    divContent.innerHTML = "";
    divContent.appendChild(imgMenu1);
    divContent.appendChild(imgMenu2);
    divContent.appendChild(imgMenu3);
}