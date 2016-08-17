import css from "./utils/dom/css";
import addClass from "./utils/dom/addClass";
import createElement from "./utils/dom/createElement";
import consts from "./consts";
import Pair from "./pair";

class RPLayoutDOM {
  constructor (ratio = 0.5, mode = consts.MODE_HORIZONTAL) {
    const container = createElement("div");
    addClass(container, consts.CONTAINER_CLASS);
    css(container, "position", "relative");
    this.container = container;
    this.els = {};
    this.autoUpdate = true;
    this.pair = new Pair(null, this, ratio, mode);
    this.pair.addToDom();
  }

  getPair () {
    return this.pair;
  }

  update () {
    this.pair.engine.getLayout().forEach(({ id, x, y, width, height }) => {
      css(this.els[id], {
        top: (y * 100) + "%",
        left: (x * 100) + "%",
        width: (width * 100) + "%",
        height: (height * 100) + "%"
      });
    });
  }

  getNestedPanels () {
    var layout = this.pair.engine.toJSON();
    const replaceWithEls = layout => {
      if (typeof layout.A === "string") layout.A = this.els[layout.A];
      else replaceWithEls(layout.A);
      if (typeof layout.B === "string") layout.B = this.els[layout.B];
      else replaceWithEls(layout.B);
    };
    replaceWithEls(layout);
    return layout;
  }
}

Object.assign(RPLayoutDOM, consts);

export default RPLayoutDOM;
