

$(document).ready(function(){

    /* MENÚ HAMBURGUESA */

    $("#burger_menu").click(function(){

        //Animación de las barras añadiendo las clases en CSS en las que se modifican la rotación y opacidad
        $("#burger_menu>span:nth-child(1)").toggleClass("primera")
        $("#burger_menu>span:nth-child(2)").toggleClass("segunda")
        $("#burger_menu>span:nth-child(3)").toggleClass("tercera")

        //Despliego del menú en móvil añadiendo la clase CSS show. Usamos stop() para evitar que se forme una cola de acciones si se hace clics muy rápidamente y seguidos
        $(".menu_items").stop()
        $(".menu_items").toggleClass("show")
    })

   /*  SLIDER */

   var $owl = $('.owl-carousel');

   $owl.children().each( function( index ) {
     $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
   });
   
  $owl.owlCarousel({
     center: true,
     loop: true,
     items: 9,
     nav: true,
     navText:["<div class='nav-btn prev-slide'><img src='./src/img/arrow.png' alt='next_arrow.png'></div>","<div class='nav-btn next-slide'><img src='./src/img/arrow.png' alt='next_arrow.png'></div>"],
     dots: false,
     responsive: {
      0: {
          items: 1
      },
      600: {
          items: 5
      },
      1000: {
          items: 7
      }}
   });
   
   $(document).on('click', '.owl-item>div', function() {
     // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
     var $speed = 300;  // in ms
     $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});

});