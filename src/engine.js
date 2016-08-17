import consts from "./consts";

const getId = () => Math.random().toString(36).substr(2);

function adjustSubLayout (subLayout, container) {
  return subLayout.map(panel => {
    var { id, x, y, width, height } = panel;
    width *= container.width;
    height *= container.height;
    x *= container.width;
    y *= container.height;
    x += container.x;
    y += container.y;
    return { id, x, y, width, height };
  });
}

class RPLayoutEngine {
  constructor (ratio = 0.5, mode = consts.MODE_HORIZONTAL) {
    this.mode = mode;
    this.ratio = ratio;
    this.A = getId();
    this.B = getId();
  }

  setRatio (ratio) {
    if (ratio < 0 || ratio > 1) {
      throw new Error("ratio must be between 0 and 1");
    }
    this.ratio = ratio;
  }

  setMode (mode) {
    this.mode = mode;
  }

  getLayout () {
    const A = {
      x: 0,
      y: 0,
      width: this.mode === consts.MODE_HORIZONTAL ? this.ratio : 1,
      height: this.mode === consts.MODE_VERTICAL ? this.ratio : 1
    };
    const B = {
      x: this.mode === consts.MODE_HORIZONTAL ? this.ratio : 0,
      y: this.mode === consts.MODE_VERTICAL ? this.ratio : 0,
      width: this.mode === consts.MODE_HORIZONTAL ? (1 - this.ratio) : 1,
      height: this.mode === consts.MODE_VERTICAL ? (1 - this.ratio) : 1
    };
    const panels = [];
    if (this.A instanceof RPLayoutEngine) {
      panels.push.apply(panels, adjustSubLayout(this.A.getLayout(), A));
    } else {
      A.id = this.A;
      panels.push(A);
    }
    if (this.B instanceof RPLayoutEngine) {
      panels.push.apply(panels, adjustSubLayout(this.B.getLayout(), B));
    } else {
      B.id = this.B;
      panels.push(B);
    }
    return panels;
  }

  toJSON () {
    return {
      mode: this.mode,
      ratio: this.ratio,
      A: this.A instanceof RPLayoutEngine ? this.A.toJSON() : this.A,
      B: this.B instanceof RPLayoutEngine ? this.B.toJSON() : this.B
    }
  }

  static fromJSON (layout) {
    const l = new RPLayoutEngine(layout.ratio, layout.mode);
    l.A = typeof layout.A === "string" ? layout.A : RPLayoutEngine.fromJSON(layout.A);
    l.B = typeof layout.B === "string" ? layout.B : RPLayoutEngine.fromJSON(layout.B);
    return l;
  }
}

Object.assign(RPLayoutEngine, consts);

export default RPLayoutEngine;
