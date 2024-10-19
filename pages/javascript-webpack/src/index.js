import "./styles.css";
import { greetings } from "./greetings";
import odinImage from "./odin.png";

console.log(greetings);

const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);