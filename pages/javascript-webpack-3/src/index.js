import { add } from "./add.js";
import { subtract } from "./subtract.js";
import "./styles.css"
import odinImage from "./Odin.png";

console.log(add(2, 3));

console.log(subtract(8, 5));

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);