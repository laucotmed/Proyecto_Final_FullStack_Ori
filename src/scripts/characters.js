/* Con $(document).ready nos aseguramos de que todas las funciones se ejecuten una vez que el documento haya terminado de cargar para evitar posibles problemas */

$(document).ready(function () {

  /* Para evitar que se esté llamando constantemente al DOM, usamos las siguientes variables para tener guardados los elementos a animar, así como la "ventana"  */
  var $animation_elements = $('.character_container');
  var $window = $(window);

  /* Con esto al hacer scroll por la página llamamos a las funciones para detectar si un elemento está en pantalla y para mostrar el botón llegado a cierta altura de scroll */

  $(window).on("scroll", function () {
    elementInView();
    showButton();
  });

  /* Con esto conseguimos que el primer elemento también tenga la pequeña animación de aparición al activarse el evento de scroll */
  $window.trigger('scroll');

  /*  FUNCIÓN PARA DETECTAR A LOS ELEMENTOS */

  function elementInView() {

    /* Primero guardamos la altura de la ventana, la posición de arriba y la posición de abajo en variables*/
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    /* Ahora, por cada elemento que pueda aparecer, guardamos el propio elemento, su altura, su posición desde arriba y su posición desde abajo en variables también */

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //esto comprueba si el elemento se encuentra en pantalla, siendo esto si la posición de abajo del elemento es mayor a la zona superior de la ventana, y si su posición de arriba menor a la zona inferior de la ventana. Si se da esta condición, se le añade la clase in-view que muestra el elemento con una pequeña animación, y se le quita si no.
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  /* BOTÓN BACK TO TOP */
  /*   Comenzamos escondiendo el botón. */

  $(".back_to_top").hide();

  /* Esta función que también será llamada al hacer scroll simplemente comprueba si la posición superior de la ventana es mayor a 100, se muestra el botón con una animación de fadeIn, y si no es así, que se oculte con un fadeOut*/

  function showButton() {
    if ($(window).scrollTop() > 100) {
      $(".back_to_top").fadeIn();
    } else {
      $(".back_to_top").fadeOut();
    }
  }

  /* También le añadimos este evento click al "botón" con el que se hace scroll a la posición 0 de la ventana, es decodeURI, hacia arriba del todo de nuestra página web */
  $(".back_to_top").click(function () {
    $(window).scrollTop(0);
  });

});