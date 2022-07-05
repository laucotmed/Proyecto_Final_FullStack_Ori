<?php
    require_once "pdoconfig.php"; 
    $connection = new PDO("mysql:host=".$host.";dbname=".$dbname,$username,$password,$options); //conexión entre PhP y servidor. Siempre hay que hacerlo

    //esto está en un archivo separado para poder llamar a la conexión cuando queramos
?>