function doIt(elem) {
  $(elem).html("<img src='/f/loader.svg'/>");
  $(elem).addClass('disabled');
  $(elem).removeAttr('href');

  setTimeout( function() {
    $(elem).html("The Love has been Spread!");
  }, 1000);
}
