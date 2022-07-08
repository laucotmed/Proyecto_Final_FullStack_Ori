<?php

try{
    $skills = $connection->query("SELECT * FROM skills WHERE skills.id = 1")->fetchAll();
}catch(Exception $error){
    echo $error;
}


/* if(isset($_POST["btnEditar"])){ 

   $id_skill = $_POST["item"];
    
    $skills = "SELECT * FROM skills WHERE skills.id=?";
    
        try{
    
        $connection->prepare($skills)->execute([$id_skill]);
    
        }catch(Exception $error){
        echo $error;
       
    } 
    
} */

?>