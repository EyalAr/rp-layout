var layout = new RPLayout(0.5, 0);
document.body.appendChild(layout.container);

layout.pair.vSplitRight(0.4);
layout.pair.right.hSplitBottom(0.5);
layout.pair.right.vSplitTop(0.5);

var anchor = $("<span>").css({
  width: "10px",
  height: "10px",
  background: "black",
  position: "absolute",
  bottom: 0,
  left: 0
});

$(layout.pair.right.top.bottom).append(anchor);

layout.pair.clickAndResize(anchor[0], function(ratio) {
  return ratio < 0.8 && ratio > 0.2;
});
layout.pair.right.clickAndResize(anchor[0], function(ratio) {
  return ratio < 0.7 && ratio > 0.3;
});

layout.update();

(function(){
  var toRatio = 1;
  function start() {
    layout.pair.right.bottom.animate(toRatio, 1000, function(){
      toRatio = (toRatio + 1) % 2;
      start();
    }, RPLayout.BEZIER_EASE_IN_OUT);
  }
  start();
})();
