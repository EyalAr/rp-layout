// define a new layout and append it to the page
var layout = new RPLayout(0.5, RPLayout.MODE_HORIZONTAL);
document.body.appendChild(layout.container);

// create a grid layout by splitting panels:
layout.pair.splitRight(0.4, RPLayout.MODE_VERTICAL);
layout.pair.right.splitTop(0.5, RPLayout.MODE_VERTICAL);
layout.pair.right.splitBottom(0.5, RPLayout.MODE_HORIZONTAL);

// define the draggable anchor box:
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
  // stop resizing if ration is not it [0.2, 0.8]
  return ratio < 0.8 && ratio > 0.2;
});
layout.pair.right.clickAndResize(anchor[0], function(ratio) {
  // stop resizing if ration is not it [0.3, 0.7]
  return ratio < 0.7 && ratio > 0.3;
});

layout.update();

// periodically animate ratio of right-bottom pair:
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
