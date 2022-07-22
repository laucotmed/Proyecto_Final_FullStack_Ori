<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Etiquetas meta sobre el sitio web -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Proyecto Final para el módulo de Desarrollo Full Stack Developer de la Escuela de Diseño CEI. Temática: Videojuego Ori And the Blind Forest">
  <meta name="keywords" content="Ori, Blind Forest, Videogame">
  <meta name="robots" content="no-index, no-follow">
  <meta name="language" content="English">
  <meta name="author" content="Laura Cote Medina">

  <!-- Icono Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="src/img/ori.ico">

  <!-- Enlaces a las hojas de estilo, al CDN de Jquery y al plugin de Owl Carousel-->
  <link rel="stylesheet" href="src/style/general.css">
  <link rel="stylesheet" href="src/style/skills.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="src/scripts/owl.carousel.min.js"></script>

  <!-- Hoja de estilo de Owl Carousel-->
  <link rel="stylesheet" href="src/style/owl.carousel.min.css">

  <!-- Título del sitio -->
  <title>Ori and the Blind Forest - Skills</title>

</head>

<body>

  <!--  CONTAINER -->
  <!-- Metemos menú y contenido en un div para poder conseguir que la tarjeta se adapte al espacio que haya en cada momento entre el menú y el slider con la propiedad flex-grow en CSS -->

  <div id="container">

    <!--  MENÚ PRINCIPAL -->
    <nav class="menu">
      <!-- Logo -->
      <div id="menu_logo"><a href="index.php"><img src="src/img/logo.png" alt="Ori and the Blind Forest Logo.png"></a></div>

      <!-- Menú hamburguesa que se mostrará cuando el tamaño sea lo suficientemente pequeño, formado por tres líneas en span -->
      <div id="burger_menu">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </div>

      <!-- Links a las distintas páginas de la web -->
      <ul class="menu_items">
        <li class="menu_item"><a href="story.html">Story</a></li>
        <li class="menu_item"><a href="characters.html">Characters</a></li>
        <li class="menu_item active"><a href="skills.php">Skills</a></li>
      </ul>
    </nav>

    <!-- SECCIÓN HABILIDADES -->
    <!-- En esta sección estarán tanto la tarjeta con los datos de la habilidad como el slider para escoger dichas habilidades y ver sus datos -->

    <section id="skills">

      <!-- Abrimos PhP para realizar un try y catch para incluir el código que se encuentra en connection.php y select.php y recoger cualquier error que se pueda producir con la conexión con la base de datos-->

      <?php

      try {

        require_once "db/connection.php";
        include "pages/select.php";

      } catch (PDOException $error) {

        die("No se ha podido acceder a la base de datos" . $dbname . ":" . $error->getMessage());
        
      }
      ?>

      <!-- TARJETA -->
      <!-- Tarjeta con icono, título, descripción e imagen de cada habilidad. El contenido de #card_content será alterado por código-->

      <div id="card">
        <div id="card_content">

          <div id="profile">
            <div id="description_img"><img src="src/img/skills/SpiritFlame2.png" alt="SpiritFlame2.png"></div>
          </div>

          <div id="description">

            <div id="img_skill"><img src="src/img/skills/SpiritFlame.png" alt="SpiritFlame.png"></div>
            <h1>Spirit Flame</h1>
            <p>Tap <span><img src="src/img/controls/SWButtonX.png" alt="SWButtonX.png"></span> / <span><img src="src/img/controls/MouseButtonRight.png" alt="MouseButtonRight.png"></span> repeatedly to use the Spirit Flame orb and quickly attack enemies even if they are some distance away.</p>

          </div>
        </div>
      </div>

      <!--  SLIDER -->
      <!-- Aquí es donde colocamos el slider del plugin Owl Carousel 2, con todos los elementos que servirán de "botón" para traer los datos. Le colocamos un data-value a cada item que se corresponde con el id que tiene cada habilidad en la base de datos -->

      <div class="carousel-wrap">
        <div class="slider owl-carousel owl-theme">
          <div class="item" data-value="1"><img src="src/img/skills/SpiritFlame.png" alt="SpiritFlameIcon.png"></div>
          <div class="item" data-value="2"><img src="src/img/skills/WallJump.png" alt="WallJumpIcon.png"></div>
          <div class="item" data-value="3"><img src="src/img/skills/ChargeFlame.png" alt="ChargeFlameIcon.png"></div>
          <div class="item" data-value="4"><img src="src/img/skills/DoubleJump.png" alt="DoubleJumpIcon.png"></div>
          <div class="item" data-value="5"><img src="src/img/skills/Bash.png" alt="BashIcon.png"></div>
          <div class="item" data-value="6"><img src="src/img/skills/Stomp.png" alt="Stomp.png"></div>
          <div class="item" data-value="7"><img src="src/img/skills/Glide.png" alt="GlideIcon.png"></div>
          <div class="item" data-value="8"><img src="src/img/skills/Climb.png" alt="ClimbIcon.png"></div>
          <div class="item" data-value="9"><img src="src/img/skills/ChargeJump.png" alt="ChargeJumpIcon.png"></div>
          <div class="item" data-value="10"><img src="src/img/skills/Dash.png" alt="DashIcon.png"></div>
          <div class="item" data-value="11"><img src="src/img/skills/LightBurst.png" alt="LightBurstIcon.png"></div>
        </div>
      </div>

    </section>
  </div>

  <!-- Enlace al script-->
  <script src="src/scripts/script.js"></script>
</body>

</html>