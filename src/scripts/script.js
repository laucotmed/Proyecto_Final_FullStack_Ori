/* Con $(document).ready nos aseguramos de que todas las funciones se ejecuten una vez que el documento haya terminado de cargar para evitar posibles problemas */

$(document).ready(function(){

    /* TRANSICIÓN ENTRE PÁGINAS SUAVE */
    /* Para lograr una transición menos brusca entre las páginas de nuestro sitio web, recurrimos al siguiente código en el que hacemos que el contenido del body aparezca suavemente con un evento de fadeIn y que al hacer click sobre alguno de los links que tengan la clase transition, evitamos que siga el link inmediatamente, y a continuación guarda la dirección en linkLocation y se produce un fadeOut que lleva a la página elegida */

    $("body").css("display", "none");
    $("body").fadeIn(3000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(3000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }

    /* MENÚ HAMBURGUESA */
    /* Hacemos un evento en el que al hacer click en nuestro icono de hamburguesa, las distintas clases se añadan a las líneas que lo forman y se produce una pequeña animación para convertirlas en una X y viceversa al usar toggleClass.  */

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
   /* En la siguiente sección de código realizamos varias funciones relacionadas con el plugin Owl Carousel 2.*/

   //guardamos el div que contiene el carrusel/slider para poder usarlo más rápidamente y hacemos que los divs hijos adquieran el atributo data-position acorde a su posición para poder centrarlos posteriormente

   var $owl = $('.owl-carousel');

   $owl.children().each( function( index ) {
     $(this).attr( 'data-position', index );
   });

   //con esto personalizamos algunas características del carrusel, como el centrar los elementos, las flechas personalizadas o el responsive
   
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
      650: {
          items: 3
      },
      900: {
        items: 5
    }, 
      1300: {
          items: 7
      }}
   });

   //con esto seleccionamos todos los divs hijos de los elementos e indicamos que si se le hace click a alguno de ellos, el elemento seleccionado será centrado a una velocidad de 300 milisegundos
   
   $(document).on('click', '.owl-item>div', function() {
        var $speed = 300;
        $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });

    
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            /* console.log(mutation); */
          if (mutation.attributeName === "class") {
            var $target = $(mutation.target);
            if ($target.hasClass("center")) {
                
                var skill_value = $target.children().data('value');
                $('#card_content').animate({'opacity':'0.0'}, 500, function (){

            $.ajax({
                url : 'pages/select.php',
                method : 'POST',
                /* dataType: "json",  */
                data : {
                    'skill_value' : skill_value
                },
                success:function(data){
                    console.log(data);
                    data = JSON.parse(data);
                    data.forEach(element => {
                        $("#card_content").html(
                            '<div id="profile">'+
                            '<div id="description_img"><img src="'+ element.img_skill +'"></div>'+
                            '</div>'+
                            '<div id="description">'+
                            '<div id="img_skill"><img src="'+ element.img + '"></div>'+
                            '<h1>'+ element.nombre +'</h1>'+
                            '<p>'+ element.descripcion_control_1 +'<span><img src="'+ element.control_consola +'"></span> / <span><img src="'+ element.control_pc +'"></span>'+ element.descripcion_control_2 +' </p>'+
                            '</div>'
                        )
                        $('#card_content').animate({'opacity':'1.0'}, 500);
                    })
                },
                error: function(response) {
                    console.log(response);
                }
            }); 

        });

            }
          }
        });
      });
      
    const elementToObserve = document.querySelector(".owl-stage");
     
    observer.observe(elementToObserve, {
            attributes: true,
            subtree: true,
            childList: true
    });

    

    /* $(".item").on('click', function(e){   
        e.preventDefault();
        var skill_value = $(this).data('value');
        $('#card_content').animate({'opacity':'0.0'}, 1000, function (){

            $.ajax({
                url : 'pages/select.php',
                method : 'POST',
                data : {
                    'skill_value' : skill_value
                },
                success:function(data){
                     console.log(data);
                     data = JSON.parse(data);
                     data.forEach(element => {
                        $("#card_content").html(
                            '<div id="profile">'+
                            '<div id="description_img"><img src="'+ element.img_skill +'"></div>'+
                            '</div>'+
                            '<div id="description">'+
                            '<div id="img_skill"><img src="'+ element.img + '"></div>'+
                            '<h1>'+ element.nombre +'</h1>'+
                            '<p>'+ element.descripcion_control_1 +'<span><img src="'+ element.control_consola +'"></span> / <span><img src="'+ element.control_pc +'"></span>'+ element.descripcion_control_2 +' </p>'+
                            '</div>'
                        )
                        $('#card_content').animate({'opacity':'1.0'}, 1000);
                    })
                }
            }); 

        });
        
    }); */
});