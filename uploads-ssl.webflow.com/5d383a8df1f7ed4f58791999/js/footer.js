$(window).on('scroll', function() {

    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
      $('.arrow').hide();
    } else {
      $('.arrow').show();
    }
  });