<?php

/* Incluimos los datos necesarios sobre la base de datos con require_once "pdoconfig.php" y realizamos la conexión entre PhP y servidor de la siguiente forma. $connection se encuentra en un archivo separado para poder llamar a la conexión cuando queramos */

require_once "pdoconfig.php";
$connection = new PDO("mysql:host=" . $host . ";dbname=" .";port=".$port.";". $dbname, $username, $password, $options);
