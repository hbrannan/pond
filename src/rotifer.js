var makeRotifer = function(top, left, timeBetweenSteps) {
  var rotifer = makeDancer(top, left, timeBetweenSteps);

  rotifer.$node = $('<span class="rotifer"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = rotifer.step;

  rotifer.step = function() {
    console.log('called')
    // call the old version of step at the beginning of any call to this new version of step
    // oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    // anchor y0 position
    // move yend position inward
    var top = rotifer.$node.position().top;
    var bottom = top + rotifer.$node.height();
    var height = rotifer.$node.height();
    //widths

    //if hit corner: rotate 60 deg?
    var inchOut = {
      height: height + 50
    };

    rotifer.$node.css(inchOut);

    setTimeout(function () {
      var inchIn = {
        top: top + 50,
        height: height - 50
      };

      rotifer.$node.css(inchIn)
    }, 500);

  };

  setInterval(function () {
    console.log('interval')
    rotifer.step();
  }, 2000);

  return rotifer;
};
