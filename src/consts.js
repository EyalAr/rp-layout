import BezierEasing from "bezier-easing";

export default {
  MODE_HORIZONTAL: 0,
  MODE_VERTICAL: 1,
  BEZIER_LINEAR: BezierEasing(0, 0, 1, 1),
  BEZIER_EASE: BezierEasing(0.25, 0.1, 0.25, 1),
  BEZIER_EASE_IN: BezierEasing(0.42, 0, 1, 1),
  BEZIER_EASE_OUT: BezierEasing(0, 0, 0.58, 1),
  BEZIER_EASE_IN_OUT: BezierEasing(0.42, 0, 0.58, 1),
  BEZIER_ACCELERATE: BezierEasing(0, 0, 1, 0),
  CONTAINER_CLASS: "rpl-container"
}
