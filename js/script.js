$(window).scroll(function() {
  if ($(document).scrollTop() >= 300) {
    $('nav').addClass('bg-dark');
  } else {
    $('nav').removeClass('bg-dark');
  }
});

