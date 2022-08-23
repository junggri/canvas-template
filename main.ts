import {Canvas} from "./src/Canvas";

window.onload = () => {
  const root = document.getElementById("root");
  const canvas = document.createElement("canvas");

  if (root) root.appendChild(canvas);
  const context = canvas.getContext("2d");

  if (context) new Canvas(context).start()


}