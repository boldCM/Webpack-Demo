import _ from "lodash";
import "./style.css";
import Wasserfall from "./Wasserfall.jpg";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Wasserfall;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
