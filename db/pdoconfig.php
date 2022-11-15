<?php

/* Estos son los datos necesarios para acceder a la base de datos (host, nombre de la base de datos, opciones de configuración...). Corresponden a los proporcionados por JawsDB en Heroku */

$host = "containers-us-west-64.railway.app";
$dbname = "bwt2a5jrdcwbd4eo";
$username = "root";
$password = "railway";

$options = [
    \PDO::ATTR_ERRMODE  => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE  => \PDO::FETCH_ASSOC,
    \PDO::ATTR_EMULATE_PREPARES  => false
];
