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


$('.description__list li').on('click', function() {

  console.log($(this), $('.current'));
  $('.current').removeClass('current');
  $('.visible').removeClass('visible');
  $(this).addClass("current");
  $('#' + $(this).index()).addClass('visible');
  console.log('removed');

    });
