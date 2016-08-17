import css from "dom-css";
import elementClass from "element-class";
import consts from "./consts";
import RPLayoutEngine from "./engine";

class Pair {
  constructor (domManager, ratio, mode) {
    this.A = document.createElement("div");
    this.B = document.createElement("div");
    this.horizontal = mode === consts.MODE_HORIZONTAL;
    this.engine = new RPLayoutEngine(ratio, mode);
    this.domManager = domManager;
    css(this.A, "position", "absolute");
    css(this.B, "position", "absolute");
    elementClass(this.A).add("rpl-panel-A");
    elementClass(this.B).add("rpl-panel-B");
  }

  addToDom () {
    this.domManager.els[this.engine.A] = this.A;
    this.domManager.els[this.engine.B] = this.B;
    this.domManager.container.appendChild(this.A);
    this.domManager.container.appendChild(this.B);
  }

  get left () {
    return this.horizontal ? this.A : undefined;
  }

  get right () {
    return this.horizontal ? this.B : undefined;
  }

  get top () {
    return !this.horizontal ? this.A : undefined;
  }

  get bottom () {
    return !this.horizontal ? this.B : undefined;
  }

  split (isA, ratio, mode) {
    const side = isA ? "A" : "B";
    const { domManager, engine } = this;
    domManager.container.removeChild(this[side]);
    delete domManager.els[engine[side]];
    const subPair = new Pair(domManager, ratio, mode);
    engine[side] = subPair.engine;
    this[side] = subPair;
    subPair.addToDom();
    if (domManager.autoUpdate) domManager.update();
    return subPair;
  }

  splitA (ratio, mode) {
    return this.split(true, ratio, mode);
  }

  splitB (ratio, mode) {
    return this.split(false, ratio, mode);
  }

  splitLeft (ratio, mode) {
    if (this.horizontal) return this.splitA(ratio, mode);
    else throw Error("pair is not horizontal");
  }

  splitRight (ratio, mode) {
    if (this.horizontal) return this.splitB(ratio, mode);
    else throw Error("pair is not horizontal");
  }

  splitTop (ratio, mode) {
    if (!this.horizontal) return this.splitA(ratio, mode);
    else throw Error("pair is not horizontal");
  }

  splitBottom (ratio, mode) {
    if (!this.horizontal) return this.splitB(ratio, mode);
    else throw Error("pair is not horizontal");
  }

  vSplitLeft (ratio) {
    return this.splitLeft(ratio, consts.MODE_VERTICAL);
  }

  vSplitRight (ratio) {
    return this.splitRight(ratio, consts.MODE_VERTICAL);
  }

  vSplitTop (ratio) {
    return this.splitTop(ratio, consts.MODE_VERTICAL);
  }

  vSplitBottom (ratio) {
    return this.splitBottom(ratio, consts.MODE_VERTICAL);
  }

  hSplitLeft (ratio) {
    return this.splitLeft(ratio, consts.MODE_HORIZONTAL);
  }

  hSplitRight (ratio) {
    return this.splitRight(ratio, consts.MODE_HORIZONTAL);
  }

  hSplitTop (ratio) {
    return this.splitTop(ratio, consts.MODE_HORIZONTAL);
  }

  hSplitBottom (ratio) {
    return this.splitBottom(ratio, consts.MODE_HORIZONTAL);
  }

  setRatio (ratio) {
    this.engine.setRatio(ratio);
    if (this.domManager.autoUpdate) this.domManager.update();
  }

  setMode (mode) {
    this.engine.setMode(mode);
    this.horizontal = mode === consts.MODE_HORIZONTAL;
    if (this.domManager.autoUpdate) this.domManager.update();
  }
}

Object.assign(Pair, consts);

export default Pair;
