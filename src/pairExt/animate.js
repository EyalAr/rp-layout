import raf from "raf";
import consts from "../consts";
import Pair from "../pair/pair";

const noop = () => {};

Pair.prototype.animate = function (ratio, duration, cb = noop, motion = consts.BEZIER_LINEAR) {
  const containerManager = this.containerManager;
  const oldAutoUpdate = containerManager.autoUpdate;
  containerManager.autoUpdate = true;
  var timeLeft = duration;
  var timeElapsed = 0;
  var timePrevTick = Date.now();
  var raf_h;
  const initRatio = this.engine.ratio;
  const dRatio = ratio - initRatio;
  const tick = () => {
    const dt = Date.now() - timePrevTick;
    timePrevTick += dt;
    timeLeft -= dt;
    timeElapsed += dt;
    const newRatio = timeLeft <= 0 ? ratio : initRatio + motion(timeElapsed / duration) * dRatio;
    this.setRatio(newRatio);
    if (timeLeft > 0) raf_h = raf(tick);
    else cancel();
  };
  raf_h = raf(tick);

  return cancel;

  function cancel () {
    raf.cancel(raf_h);
    containerManager.autoUpdate = oldAutoUpdate;
    cb(timeElapsed);
  }
}
