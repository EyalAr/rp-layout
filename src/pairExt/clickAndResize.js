import Pair from "../pair";

const trueFilter = () => true;

Pair.prototype.clickAndResize = function (anchor, filter = trueFilter) {
  const domManager = this.domManager;
  const oldAutoUpdate = domManager.autoUpdate;

  anchor.addEventListener("mousedown", e => {
    domManager.autoUpdate = true;
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", e => {
      domManager.autoUpdate = oldAutoUpdate;
      window.removeEventListener("mousemove", mouseMoveHandler);
    });
  });

  const mouseMoveHandler = (e) => {
    const pos = this.horizontal ? e.clientX : e.clientY;
    const containerRect = this.domManager.container.getBoundingClientRect();
    const pairStarts = this.engine[this.horizontal ? "getAbsoluteLeft" : "getAbsoluteTop"]() *
      containerRect[this.horizontal ? "width" : "height"] +
      containerRect[this.horizontal ? "left" : "top"];
    const pairWidth = this.engine[this.horizontal ? "getAbsoluteWidth" : "getAbsoluteHeight"]() *
      containerRect[this.horizontal ? "width" : "height"];
    var ratio = (pos - pairStarts) / pairWidth;
    if (ratio < 0) ratio = 0;
    if (ratio > 1) ratio = 1;
    if (filter(ratio)) this.setRatio(ratio);
  }
}
