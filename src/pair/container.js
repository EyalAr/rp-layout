import consts from "../consts";
import connectors from "../connectors";
import Pair from "./pair";

class RPLayoutContainer {
  constructor (ratio = 0.5, mode = consts.MODE_HORIZONTAL) {
    this.container = connectors.createContainer();
    this.els = {};
    this.autoUpdate = true;
    this.pair = new Pair(null, this, ratio, mode);
    this.pair.addToContainer();
  }

  update () {
    this.pair.engine.getLayout().forEach(({ id, x, y, width, height }) => {
      connectors.setPosition(this.els[id], x, y);
      connectors.setSize(this.els[id], width, height);
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

Object.assign(RPLayoutContainer, consts);
Object.assign(RPLayoutContainer, connectors);

export default RPLayoutContainer;
