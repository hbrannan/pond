var makeRotifer = function(top, left, timeBetweenSteps) {

  var rotifer = makeDancer(top, left, timeBetweenSteps);
  var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var browserHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  var scrollTop = $(document).scrollTop();

  var $rotifer = rotifer.$node;

  //Overwrite node
  $rotifer.addClass('rotifer');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = rotifer.step;
  var stepDistance = 50;

  rotifer.step = function() {

    var top = $rotifer.position().top;
    var height = $rotifer.height();
    var bottom = top + height;

    var inchOut = {
      height: height + stepDistance
    };
    //should get skinnier

    //if hit corner: rotate 60 deg?
    //keyframes?
    //
    if (top < 5 || browserHeight - bottom < 5) {
      stepDistance *= -1;
      console.log('hit bottom', stepDistance)
    }

    $rotifer.css(inchOut);


    setTimeout(function () {
      var inchIn = {
        top: top + stepDistance,
        height: height - stepDistance
      };

      $rotifer.css(inchIn)
    }, 500);

  };

  setInterval(rotifer.step, 2000);

  return rotifer;
};
