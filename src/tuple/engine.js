import AbstractLayoutEngine from "../utils/abstractLayoutEngine";
import consts from "../consts";

const getID = () => Math.random().toString(36).substr(2);
const normalizePanels = panels => {
  var total = 0;
  const ids = {};
  const _panels = panels.map(p => {
    const _p = {};
    if (typeof p === "number") {
      if (p < 0) {
        throw Error("ratio cannot be smaller than 0");
      }
      total += p;
      _p.ratio = p;
    } else if (typeof p === "object" && p !== null) {
      if (typeof p.ratio !== "number") {
        throw Error("panel spec missing 'ratio' field");
      }
      if (p.ratio < 0) {
        throw Error("ratio cannot be smaller than 0");
      }
      if (p.id) {
        if (typeof p.id !== "string") {
          throw Error("id must be a string");
        }
        if (ids[p.id]) {
          throw Error("id must be unique");
        }
        ids[p.id] = true;
      }
      total += p.ratio;
      _p.ratio = p.ratio;
      if (p.id) _p.id = id;
    } else {
      throw Error("invalid panel spec");
    }
    return _p;
  });
  _panels.forEach(p => p.ratio /= total);
  return _panels;
}
const assignMissingIDs = panels => {
  panels.forEach(p => p.id = p.id || getID());
  return panels;
}

class TupleLayoutEngine extends AbstractLayoutEngine {
  constructor (panels = [0.5, 0.5], mode = consts.MODE_HORIZONTAL) {
    super();
    this.setMode(mode);
    this.setPanels(panels);
  }

  setPanels (panels) {
    this.panels = this.panels || [];
    this.panels = assignMissingIDs(
      normalizePanels(panels)
        .map((p, i) => Object.assign({}, this.panels[i] || {}, p))
    );
    return this;
  }

  setMode (mode) {
    this.horizontal = mode === consts.MODE_HORIZONTAL;
    return this;
  }

  setNestedLayout (panel, layout) {
    if (!this.panels[panel]) {
      throw Error("unknown panel");
    }
    if (!(layout instanceof AbstractLayoutEngine)) {
      throw Error("unknown layout type");
    }
    this.panels[panel].nested = layout;
    return this;
  }

  toLayoutSpec () {
    const specs = [];
    for (let i = 0 ; i < this.panels.length ; i++) {
      let first = i === 0;
      specs.push({
        id: this.panels[i].id,
        top: this.horizontal || first ? 0 : (specs[i - 1].top + specs[i - 1].height),
        left: !this.horizontal || first ? 0 : (specs[i - 1].left + specs[i - 1].width),
        width: this.horizontal ? this.panels[i].ratio : 1,
        height: !this.horizontal ? this.panels[i].ratio : 1,
        nested: this.panels[i].nested ? this.panels[i].nested.toLayoutSpec() : []
      });
    }
    return specs.map(spec => ({
      id: spec.id,
      nested: spec.nested,
      top: spec.top * 100 + "%",
      left: spec.left * 100 + "%",
      width: spec.width * 100 + "%",
      height: spec.height * 100 + "%"
    }));
  }

  toJSON () {
    return {
      type: "tuple",
      mode: this.horizontal ? consts.MODE_HORIZONTAL : consts.MODE_VERTICAL,
      panels: this.panels.map(({ id, ratio, nested }) => ({
        id, ratio,
        nested: nested ? nested.toJSON() : undefined
      }))
    }
  }

  clone () {
    const c = new TupleLayoutEngine(
      this.panels,
      this.horizontal ? consts.MODE_HORIZONTAL : consts.MODE_VERTICAL
    );
    this.panels.forEach((p, i) => {
      if (p.nested) {
        c.setNestedLayout(i, p.nested.clone());
      }
    });
    return c;
  }
}

export default TupleLayoutEngine;
