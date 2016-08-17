import css from "dom-css";
import elementClass from "element-class";
import consts from "./consts";
import Pair from "./pair";

class RPLayoutDOM {
  constructor (ratio = 0.5, mode = consts.MODE_HORIZONTAL) {
    const container = document.createElement("div");
    elementClass(container).add(consts.CONTAINER_CLASS);
    this.container = container;
    this.els = {};
    this.autoUpdate = true;
    this.pair = new Pair(this, ratio, mode);
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
