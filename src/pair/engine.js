import consts from "../consts";

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
  constructor (parent, ratio = 0.5, mode = consts.MODE_HORIZONTAL) {
    this.horizontal = mode === consts.MODE_HORIZONTAL;
    this.ratio = ratio;
    this.parent = parent;
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
    this.horizontal = mode === consts.MODE_HORIZONTAL;
  }

  getAbsoluteWidth () {
    if (!this.parent) return 1;
    if (!this.parent.horizontal) return this.parent.getAbsoluteWidth();
    return this.parent.getAbsoluteWidth() * (this.parent.A === this ? this.parent.ratio : (1 - this.parent.ratio));
  }

  getAbsoluteHeight () {
    if (!this.parent) return 1;
    if (this.parent.horizontal) return this.parent.getAbsoluteHeight();
    return this.parent.getAbsoluteHeight() * (this.parent.A === this ? this.parent.ratio : (1 - this.parent.ratio));
  }

  getAbsoluteLeft () {
    if (!this.parent) return 0;
    if (!this.parent.horizontal) return this.parent.getAbsoluteLeft();
    return this.parent.getAbsoluteLeft() + (this.parent.A === this ? 0 : this.parent.ratio * this.parent.getAbsoluteWidth());
  }

  getAbsoluteTop () {
    if (!this.parent) return 0;
    if (this.parent.horizontal) return this.parent.getAbsoluteTop();
    return this.parent.getAbsoluteTop() + (this.parent.A === this ? 0 : this.parent.ratio * this.parent.getAbsoluteHeight());
  }

  getLayout () {
    const A = {
      x: 0,
      y: 0,
      width: this.horizontal ? this.ratio : 1,
      height: !this.horizontal ? this.ratio : 1
    };
    const B = {
      x: this.horizontal ? this.ratio : 0,
      y: !this.horizontal ? this.ratio : 0,
      width: this.horizontal ? (1 - this.ratio) : 1,
      height: !this.horizontal ? (1 - this.ratio) : 1
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
      mode: this.horizontal ? consts.MODE_HORIZONTAL : consts.MODE_VERTICAL,
      ratio: this.ratio,
      A: this.A instanceof RPLayoutEngine ? this.A.toJSON() : this.A,
      B: this.B instanceof RPLayoutEngine ? this.B.toJSON() : this.B
    }
  }

  static fromJSON (layout, parent = null) {
    const l = new RPLayoutEngine(parent, layout.ratio, layout.mode);
    l.A = typeof layout.A === "string" ? layout.A : RPLayoutEngine.fromJSON(layout.A, l);
    l.B = typeof layout.B === "string" ? layout.B : RPLayoutEngine.fromJSON(layout.B, l);
    return l;
  }
}

Object.assign(RPLayoutEngine, consts);

export default RPLayoutEngine;
