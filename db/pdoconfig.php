<?php

/* Estos son los datos necesarios para acceder a la base de datos (host, nombre de la base de datos, opciones de configuración...). Corresponden a los proporcionados por JawsDB en Heroku */

$host = "sql516.main-hosting.eu";
$dbname = "u408988922_ori_bbdd";
$username = "u408988922_laura";
$password = "P4ssw0rd";

$options = [
    \PDO::ATTR_ERRMODE  => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE  => \PDO::FETCH_ASSOC,
    \PDO::ATTR_EMULATE_PREPARES  => false
];
