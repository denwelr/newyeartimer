import * as view from "./view.js";
import Timer from "./model.js";

function setDataToRender() {
  const timer = new Timer();
  timer.getTime();

  view.updateDOM(timer.days, timer.hours, timer.minutes, timer.seconds);
}

function setDataToRenderRecursion(ms) {
  setDataToRender();

  setTimeout(setDataToRenderRecursion, ms, ms);
}

export default function () {
  setDataToRenderRecursion(995);
}
