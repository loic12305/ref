<?php
$prenom = $_POST['prenom']; 
$nom = $_POST['nom']; 
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$texte = $_POST['texte'];


$message= "Message de : $prenom $nom - tel : $phone mail : $mail <br/> $texte";


     if(mail('loic.entressangle@gmail.com', 'Contact site Rillettes en Fût', $message)) 
     { 
          echo 'Le message a bien été envoyé'; 
     } 
     else 
     { 
          echo 'Le message n\'a pu être envoyé'; 
     } 

?>
