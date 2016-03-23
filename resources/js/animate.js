

$(function() {
  console.log('loaded');
  setTimeout(function() {
    $('.slide').click(function() {
      console.log("clicked");
      $(".container div:first").animate({
        left: '-180%'
      }, 500, function() {
        $(this).css('left', '180%');
        $(this).appendTo('.container');
      });

      $('.container div:first').next().animate({
        left: '0'
      }, 500);
    });
  }, 1000);
});
