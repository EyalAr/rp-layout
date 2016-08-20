import TupleLayoutEngine from "../tuple/engine";
import consts from "../consts";

class PairlLayoutEngine extends TupleLayoutEngine {
  constructor (ratio = 0.5, mode = consts.MODE_HORIZONTAL) {
    super([{
      ratio: ratio,
      id: typeof ratio === "object" && ratio !== null ? ratio.idA : undefined
    }, {
      ratio: 1 - ratio,
      id: typeof ratio === "object" && ratio !== null ? ratio.idB : undefined
    }], mode);
    this.ratio = ratio;
  }

  setRatio (ratio) {
    this.ratio = ratio;
    return super.setPanels([ratio, 1 - ratio]);
  }

  setMode (mode) {
    return super.setMode(mode);
  }

  setANestedLayout (layout) {
    return super.setNestedLayout(0, layout);
  }

  setBNestedLayout (layout) {
    return super.setNestedLayout(1, layout);
  }

  toLayoutSpec () {
    return super.toLayoutSpec();
  }

  toJSON () {
    const { panels, mode } = super.toJSON();
    return {
      type: "pair",
      mode,
      ratio: this.ratio,
      A: { id: panels[0].id, nested: panels[0].nested },
      B: { id: panels[1].id, nested: panels[1].nested }
    }
  }

  clone () {
    const c = new PairlLayoutEngine(
      this.ratio,
      this.horizontal ? consts.MODE_HORIZONTAL : consts.MODE_VERTICAL
    );
    if (this.panels[0].nested) {
      c.setANestedLayout(this.panels[0].nested.clone());
    }
    if (this.panels[1].nested) {
      c.setBNestedLayout(this.panels[1].nested.clone());
    }
    return c;
  }
}

export default PairlLayoutEngine;
