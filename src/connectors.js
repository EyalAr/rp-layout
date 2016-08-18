import createElement from "./utils/dom/createElement";
import appendChild from "./utils/dom/appendChild";
import removeChild from "./utils/dom/removeChild";
import css from "./utils/dom/css";

export default {
  createContainer: () => createElement("div"),
  createPanel: () => createElement("div"),
  addPanel: (container, panel) => appendChild(container, panel),
  removePanel: (container, panel) => removeChild(container, panel),
  setPosition: (el, x, y) => css(el, {
    top: (y * 100) + "%",
    left: (x * 100) + "%"
  }),
  setSize: (el, width, height) => css(el, {
    width: (width * 100) + "%",
    height: (height * 100) + "%"
  })
}
