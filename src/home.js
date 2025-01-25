import img from "./assets/lucabravo.jpg"

const imgHome = new Image();
imgHome.src = img;
imgHome.style.cssText = "max-width: 70%; height: auto; border-radius: 20px;"

export const divContent = document.querySelector("#content");
console.log(divContent);

export function homeContent () {
    divContent.innerHTML = "";
    const divHeadline = document.createElement("div");
    divHeadline.classList.add("divHeadline");
    divContent.appendChild(divHeadline);
    const h1Content = document.createElement("h1");
    h1Content.textContent = "Philosopher's Cave";
    divHeadline.appendChild(h1Content);
    const paraContent = document.createElement("p");
    paraContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dapibus mauris. Proin tincidunt, nisl quis volutpat interdum, tortor sem facilisis eros, sit amet vestibulum est diam et enim. Vivamus vestibulum non libero pulvinar bibendum. Mauris ante odio, rutrum in arcu blandit, venenatis bibendum erat. Donec imperdiet enim sagittis sapien scelerisque, a lacinia ligula convallis. Ut non dolor ut augue mattis mattis sit amet in turpis. Nullam scelerisque ut nisi non pellentesque. Pellentesque vel est pharetra, tincidunt augue eget, pellentesque lectus. Proin ut lectus ut dolor tempus fermentum. Aliquam auctor vitae enim in convallis. Nunc id ligula sed quam lacinia rutrum. Nam vitae pellentesque neque. Sed auctor ultrices consectetur.";
    divHeadline.appendChild(paraContent);

    divContent.append(imgHome);

    const finalMsg = document.createElement("h2");
    finalMsg.textContent = "Come to see us and have a free beer!";
    divContent.appendChild(finalMsg);
    finalMsg.style.cssText = "color: var(--main-border-color); text-align: center; font-family: 'Exo 2', serif;"

}