import "./index.css";
import MY_IMAGE from './assets/js.png';

console.log("Hello World!");

const mainTitle = document.createElement("h1");
const image = document.createElement("img");

mainTitle.textContent = "I love JavaScript";
mainTitle.className = "main-title";
image.src = MY_IMAGE;
image.className = "image";

document.body.append(image);
document.body.append(mainTitle);