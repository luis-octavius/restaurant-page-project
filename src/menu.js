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

class divPlate {
    constructor(father, img, h2, text) {
        this.father = father;
        this.img = img;
        this.h2 = h2;
        this.text = text;
    }
    set divAccoplate (father) {
        const divP = document.createElement("div");
        return this.father.appendChild(`${this.img}${this.h2}${this.text}`);
    }
}


export function menuContent () {
    divContent.innerHTML = "";
    divContent.appendChild(imgMenu1);
    divContent.appendChild(imgMenu2);
    divContent.appendChild(imgMenu3);

    const imgPack = divContent.getElementsByTagName("img");

    for (let i = 0; i < imgPack.length; i++) {
        imgPack[i].style.cssText = "width: 150px; height: auto;"
    }

    const divPlate1 = new divPlate(divContent, )


}