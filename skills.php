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
  <link rel="shortcut icon" type="image/x-icon" href="./src/img/ori.ico">

  <!-- Enlaces a la hoja de estilo, al script y al CDN de Jquery-->
  <link rel="stylesheet" href="./src/style/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="./src/scripts/owl.carousel.min.js"></script>

  <!-- Owl Stylesheets -->
  <link rel="stylesheet" href="./src/style/owl.carousel.min.css">
  <link rel="stylesheet" href="./src/style/owl.theme.default.min.css">

  <!-- Título del sitio -->
  <title>Ori and the Blind Forest</title>

</head>
<body>
   
    <!--  MENÚ PRINCIPAL -->
    <nav class="menu">
        <!-- Logo -->
        <div id="menu_logo"><a href="./index.php"><img src="src/img/logo.png" alt="Ori and the Blind Forest Logo.png"></a></div>

        <!-- Menú hamburguesa que se mostrará cuando el tamaño sea lo suficientemente pequeño -->
        <div id="burger_menu">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </div>
        
          <!-- Links a las distintas páginas de la web -->
        <ul class="menu_items">
            <li class="menu_item"><a href="./story.html">Story</a></li>
            <li class="menu_item"><a href="./characters.html">Characters</a></li>
            <li class="menu_item active"><a href="./skills.html">Skills</a></li>
        </ul>
    </nav>

    <!-- TARJETA DATOS HABILIDADES -->

    <section id="skills">

    <!-- Tarjeta con icono, título, descripción e imagen con cada habilidad-->

    <?php

      require_once "db/connection.php";
      echo "Conectado a la base de datos".$dbname." en el host ".$host;

    ?>

    <div id="card">
      <div id="profile">
        <div id="img_skill"><img src="./src/img/skills/Stomp.png" alt="stomp.png"></div>
        <h1>STOMP</h1>
      </div>
      <div id="description">
        <p>To use this ability hold <span><img src="./src/img/controls/SWButtonA.png" alt="buttonY.png"></span> / <span><img src="./src/img/controls/KeyboardButtonK.png" alt="buttonY.png"></span> near lanterns or enemy projectiles. then aim in the direction you'd like to leap. Projectiles will be redirected in the opposite direction</p>
        <div id="description_img"><img src="./src/img/skills/SpiritFlame2.png" alt="SpiritFlame2.png"></div>
      </div>
    </div>

    <div class="carousel-wrap">
    <div class="slider owl-carousel owl-theme">
          <div class="item"><img src="./src/img/skills/SpiritFlame.png" alt="SpiritFlameIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/WallJump.png" alt="WallJumpIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/Bash.png" alt="BashIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/ChargeFlame.png" alt="ChargeFlameIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/ChargeJump.png" alt="ChargeJumpIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/Climb.png" alt="ClimbIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/DoubleJump.png" alt="DoubleJumpIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/Glide.png" alt="GlideIcon.png"></div>
          <div  class="item"><img src="./src/img/skills/Stomp.png" alt="Stomp.png"></div>
    </div>
  </div>

  </section>
  <script src="./src/scripts/script.js"></script>
</body>
</html>