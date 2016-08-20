import raf from "raf";
import consts from "../consts";

const noop = () => {};

export default (from, to, duration, cb = noop, motion = consts.BEZIER_LINEAR) => {
  var timeLeft = duration;
  var timeElapsed = 0;
  var timePrevTick = Date.now();
  var raf_h;
  const d = to - from;
  const tick = () => {
    const dt = Date.now() - timePrevTick;
    timePrevTick += dt;
    timeLeft -= dt;
    timeElapsed += dt;
    const val = timeLeft <= 0 ? to : from + motion(timeElapsed / duration) * d;
    if (timeLeft > 0) {
      cb(timeElapsed, val, false);
      raf_h = raf(tick);
    } else {
      cb(timeElapsed, val, true);
    }
  };
  raf_h = raf(tick);

  return () => raf.cancel(raf_h);
}
