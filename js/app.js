$( document ).foundation({
    orbit: {
      animation: 'slide',
      timer_speed: 1500,
      pause_on_hover: false,
      animation_speed: 1500,
      navigation_arrows: false,
      bullets: false,
      slide_number: false,
      swipe: false,
       orbit_transition_class: ''


  }
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


$(window).scroll(function(e) {
  didScroll = true;
  console.log('lol');
})

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }
  if (st > lastScrollTop && st > navbarHeight) {
     $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    if(st + $(window).height() < $(document).height()) {
     $('header').removeClass('nav-up').addClass('nav-down');
    }
  }
 lastScrollTop = st;
}


$('.description__list li').on('click', function() {

  console.log($(this), $('.current'));
  $('.current').removeClass('current');
  $('.visible').removeClass('visible');
  $(this).addClass("current");
  $('#' + $(this).index()).addClass('visible');
  console.log('removed');

    });
