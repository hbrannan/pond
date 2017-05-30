$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addRotiferButton').on('click', function(event) {

    var rotiferMaker = $(this).data('rotifer-maker');
    console.log($(this.data), rotiferMaker, window[makeRotifer]);
    var rotiferMakerFunction = window[makeRotifer];

    // get the maker function for the kind of dancer we're supposed to make
    // var dancerMakerFunction = window[dancerMakerFunctionName];

    var rotifer = makeRotifer (
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
     $('body').append(rotifer.$node)
  });
});

