$(document).ready(function () {

  /* Para evitar que se esté llamando constantemente al DOM, usamos las siguientes variables para tener guardados los elementos a animar así como la "ventana"  */
  var $animation_elements = $('.character_container');
  var $window = $(window);

  /* con esto al hacer scroll por la página llamamos a la función */

  $(window).on("scroll", function () {
    elementInView();
    showButton();
  });


  $window.trigger('scroll');

  function elementInView() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }


  $(".back_to_top").hide();

  $(".back_to_top").click(function () {
    $(window).scrollTop(0);
  });

  function showButton() {
    if ($(window).scrollTop() > 100) {
      $(".back_to_top").fadeIn();
    } else {
      $(".back_to_top").fadeOut();
    }
  }

});