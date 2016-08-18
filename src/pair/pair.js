import consts from "../consts";
import connectors from "../connectors";
import RPLayoutEngine from "./engine";

class Pair {
  constructor (parent, containerManager, ratio, mode) {
    this.A = connectors.createPanel();
    this.B = connectors.createPanel();
    this.horizontal = mode === consts.MODE_HORIZONTAL;
    this.engine = new RPLayoutEngine(parent ? parent.engine : null, ratio, mode);
    this.containerManager = containerManager;
  }

  addToContainer () {
    this.containerManager.els[this.engine.A] = this.A;
    this.containerManager.els[this.engine.B] = this.B;
    connectors.addPanel(this.containerManager.container, this.A);
    connectors.addPanel(this.containerManager.container, this.B);
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
    const { containerManager, engine } = this;
    connectors.removePanel(containerManager.container, this[side]);
    delete containerManager.els[engine[side]];
    const subPair = new Pair(this, containerManager, ratio, mode);
    engine[side] = subPair.engine;
    this[side] = subPair;
    subPair.addToContainer();
    if (containerManager.autoUpdate) containerManager.update();
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
    if (this.containerManager.autoUpdate) this.containerManager.update();
  }

  setMode (mode) {
    this.engine.setMode(mode);
    this.horizontal = mode === consts.MODE_HORIZONTAL;
    if (this.containerManager.autoUpdate) this.containerManager.update();
  }
}

Object.assign(Pair, consts);

export default Pair;
