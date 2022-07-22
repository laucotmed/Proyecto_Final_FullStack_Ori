<?php

/* con if(isset($_POST["skill_value"])) nos cercioramos de que el valor que hemos enviado desde AJAX exista y se pueda realizar la siguiente llamada a la base de datos. Luego empleamos un try para realizar el SELECT de los datos de la habilidad escogida usando su id y un catch para comprobar qué ha ocurrido en caso de error */

if (isset($_POST["skill_value"])) {

    try {
        include "../db/connection.php";

        $id_skill = $_POST["skill_value"];

        $skill = $connection->query('SELECT * FROM skills WHERE skills.id="' . $id_skill . '"')->fetchAll();

        /* convertimos la respuesta en json para poder trabajar mejor con los datos obtenidos */

        echo json_encode($skill);
        
    } catch (Exception $error) {
        echo $error;
    }
}
