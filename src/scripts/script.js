/* Con $(document).ready nos aseguramos de que todas las funciones se ejecuten una vez que el documento haya terminado de cargar para evitar posibles problemas */

$(document).ready(function () {

    /* MENÚ HAMBURGUESA */
    /* Hacemos un evento en el que al hacer click en nuestro icono de hamburguesa, las distintas clases se añadan a las líneas que lo forman y se produce una pequeña animación para convertirlas en una X y viceversa al usar toggleClass.  */

    $("#burger_menu").click(function () {

        /* Animación de las barras añadiendo las clases en CSS en las que se modifican la rotación y opacidad */
        $("#burger_menu>span:nth-child(1)").toggleClass("primera")
        $("#burger_menu>span:nth-child(2)").toggleClass("segunda")
        $("#burger_menu>span:nth-child(3)").toggleClass("tercera")

        /* Despliego del menú en móvil añadiendo la clase CSS show. En caso de hacer clic en la "X", se desactivaría, cerrando el menú. Usamos stop() para evitar que se forme una cola de acciones si se hace clics muy rápidamente y seguidos. También añadimos la clase "overflow-menu" al body, evitando que podamos hacer scroll mientras el menú se encuentre abierto. */
        $(".menu_items").stop()
        $(".menu_items").toggleClass("show")
        $('body').toggleClass("overflow-menu");
    })



    /* MOSTRAR PERSONAJES Y ANIMACIÓN */
    /* Esta sección de código es para mostrar a los personajes en la página de Characters. Para evitar que se esté llamando constantemente al DOM, usamos las siguientes variables para tener guardados los elementos a animar, así como la "ventana"  */
    var $animation_elements = $('.character_container');
    var $window = $(window);

    /* Con esto al hacer scroll por la página llamamos a las funciones para detectar si un elemento está en pantalla y para mostrar el botón llegado a cierta altura de scroll */

    $(window).on("scroll", function () {
        elementInView();
        showButton();
    });

    /* Con esto conseguimos que el primer elemento también tenga la pequeña animación de aparición al activarse el evento de scroll */
    $window.trigger('scroll');

    /* función para detectar si una sección de personaje está en pantalla */

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
    /* También para la página de Characters. Comenzamos escondiendo el botón. */

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




    /*  SLIDER */
    /* En la siguiente sección de código realizamos varias funciones relacionadas con el plugin Owl Carousel 2 que usamos en la página de Skills. Para empezar, guardamos el div que contiene el carrusel/slider para poder usarlo más rápidamente y hacemos que los divs hijos adquieran el atributo data-position acorde a su posición para poder centrarlos posteriormente */

    var $owl = $('.owl-carousel');

    $owl.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    /* con esto personalizamos algunas características del carrusel, como el centrar los elementos, que cuando llegues al último elemento el siguiente sea el primero, el número de elementos en que contiene, las flechas personalizadas, si se puede hacer "drag" en ordenador y móvil o el responsive */

    $owl.owlCarousel({
        center: true,
        loop: true,
        items: 9,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'><img src='./src/img/arrow.png' alt='next_arrow.png'></div>", "<div class='nav-btn next-slide'><img src='./src/img/arrow.png' alt='next_arrow.png'></div>"],
        dots: false,
        touchDrag: true,
        mouseDrag: true,
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
            }
        }
    });

    /*  Con esto seleccionamos todos los divs hijos de los elementos e indicamos que si se le hace click a alguno de ellos, el elemento seleccionado será centrado a una velocidad de 300 milisegundos, usando uno de los eventos propios de Owl Carousel */

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;
        $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });




    /* MUTATION OBSERVER */
    /* Con esto creamos un nuevo "observador" empleando el objeto integrado de Javascript de MutationObserver. Dicho observador vigila si hay algún cambio en el elemento que le indiquemos (en la línea 140 de este código). En este caso le decimos que entre todos los elementos que cambian (mutations.forEach), si existe alguno que tenga la clase "center" (if ($target.hasClass("center"))), recoja el data-value de ese hijo y se realice todo lo demás (animación y llamada a AJAX)  */

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === "class") {
                var $target = $(mutation.target);
                if ($target.hasClass("center")) {
                    var skill_value = $target.children().data('value');

                    /* Aquí comienza la animación para que la aparición de los datos no sea tan brusca. Primero se baja la opacidad a 0 y luego en la línea 134 se sube a 1 otra vez */
                    $('#card_content').animate({
                        'opacity': '0.0'
                    }, 500, function () {

                        /* llamada a AJAX con el que le pasamos el data-value la página de select como skill_value y recogemos los datos obtenidos mediante data, con el que hacemos un forEach para recorrer los datos e introducirlos en el contenedor card_content sustituyendo su contenido por el recibido de la base de datos */

                        $.ajax({
                            url: 'pages/select.php',
                            method: 'POST',
                            dataType: "json",
                            data: {
                                'skill_value': skill_value
                            },
                            success: function (data) {
                                data.forEach(element => {
                                    $("#card_content").html(
                                        '<div id="profile">' +
                                        '<div id="description_img"><img src="' + element.img_skill + '"></div>' +
                                        '</div>' +
                                        '<div id="description">' +
                                        '<div id="img_skill"><img src="' + element.img + '"></div>' +
                                        '<h1>' + element.nombre + '</h1>' +
                                        '<p>' + element.descripcion_control_1 + '<span><img src="' + element.control_consola + '"></span> / <span><img src="' + element.control_pc + '"></span>' + element.descripcion_control_2 + ' </p>' +
                                        '</div>'
                                    )
                                    $('#card_content').animate({
                                        'opacity': '1.0'
                                    }, 500);
                                })
                            }
                        });

                    });

                }
            }
        });
    });

    /* Este es el elemento que le indicamos a nuestro observador que vigile (el contenedor padre donde se encuentran todos nuestros items). Como Jquery recoge este elemento como un objeto, tenemos que indicarle el índice cero para poder usarlo. Configuramos también algunas opciones de este objeto para que mire los cambios que se produzcan en los hijos */

    var elementsToObserve = $(".owl-stage")[0];

    observer.observe(elementsToObserve, {
        attributes: true,
        subtree: true,
        childList: true
    });

});