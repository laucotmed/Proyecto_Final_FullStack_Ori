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

    /*  SLIDER */

    /* En la siguiente sección de código realizamos varias funciones relacionadas con el plugin Owl Carousel 2. Para empezar, guardamos el div que contiene el carrusel/slider para poder usarlo más rápidamente y hacemos que los divs hijos adquieran el atributo data-position acorde a su posición para poder centrarlos posteriormente */

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

    /*  Con esto creamos un nuevo "observador" empleando el objeto integrado de Javascript de MutationObserver. Dicho observador vigila si hay algún cambio en el elemento que le indiquemos (en la línea 140 de este código). En este caso le decimos que entre todos los elementos que cambian (mutations.forEach), si existe alguno que tenga la clase "center" (if ($target.hasClass("center"))), recoja el data-value de ese hijo y se realice todo lo demás (animación y llamada a AJAX)  */

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