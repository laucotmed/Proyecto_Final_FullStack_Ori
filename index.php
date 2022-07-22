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

  <!-- Enlaces a las hojas de estilo y al CDN de Jquery-->
  <link rel="stylesheet" href="src/style/general.css">
  <link rel="stylesheet" href="src/style/home.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <!-- Título del sitio -->
  <title>Ori and the Blind Forest</title>
</head>

<body>
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
      <li class="menu_item"><a href="skills.php">Skills</a></li>
    </ul>
  </nav>

  <!-- Enlace al script-->
  <script src="src/scripts/script.js"></script>
</body>

</html>