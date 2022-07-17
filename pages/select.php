<?php

if(isset($_POST["skill_value"])){

    /* echo $_POST["skill_value"]; */
   
   try{
       include "../db/pdoconfig.php";
        $connection = new PDO("mysql:host=".$host.";dbname=".$dbname,$username,$password,$options);

        /* include "../db/connection.php"; */

        $id_skill = $_POST["skill_value"];

        $skill = $connection->query('SELECT * FROM skills WHERE skills.id="'.$id_skill.'"')->fetchAll();

        /* var_dump($skill); */

       echo json_encode($skill);

    }catch(Exception $error){
        echo $error;
    }

}

?>