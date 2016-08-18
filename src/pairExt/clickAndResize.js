import Pair from "../pair/pair";

const trueFilter = () => true;

Pair.prototype.clickAndResize = function (anchor, filter = trueFilter) {
  const containerManager = this.containerManager;
  const oldAutoUpdate = containerManager.autoUpdate;

  anchor.addEventListener("mousedown", e => {
    containerManager.autoUpdate = true;
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", e => {
      containerManager.autoUpdate = oldAutoUpdate;
      window.removeEventListener("mousemove", mouseMoveHandler);
    });
  });

  const mouseMoveHandler = (e) => {
    const pos = this.horizontal ? e.clientX : e.clientY;
    const containerRect = this.containerManager.container.getBoundingClientRect();
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
