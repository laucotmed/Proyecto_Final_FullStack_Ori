<?php

try{

    $id_skill = $_POST["item"];

    $skill = $connection->query('SELECT * FROM skills WHERE skills.id="'.$id_skill.'"')->fetchAll();
}catch(Exception $error){
    echo $error;
}


/* if(isset($_POST["btnEditar"])){ 

   
    
    $skills = "SELECT * FROM skills WHERE skills.id=?";
    
        try{
    
        $connection->prepare($skills)->execute([$id_skill]);
    
        }catch(Exception $error){
        echo $error;
       
    } 
    
} */

?>