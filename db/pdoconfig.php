<?php

/* Estos son los datos necesarios para acceder a la base de datos (host, nombre de la base de datos, opciones de configuración...). Corresponden a los proporcionados por JawsDB en Heroku */

$host = "oliadkuxrl9xdugh.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
$dbname = "bwt2a5jrdcwbd4eo";
$username = "kvsaritajkavi5ln";
$password = "vh8wmyq9oews41ip";

$options = [
    \PDO::ATTR_ERRMODE  => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE  => \PDO::FETCH_ASSOC,
    \PDO::ATTR_EMULATE_PREPARES  => false
];

?>