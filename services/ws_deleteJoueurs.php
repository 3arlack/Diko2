<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_joueurs.php");

$data = file_get_contents("php://input");

if(isset($data) && !empty($data))
{
  // Extract the data.
  $request = json_decode($data);
  
  for($i=0 ; $i < count($request) ; $i++){
    if ($request[$i]->nom_joueur == null){
      $temp = new joueurs($request[$i]->_ID,0, 0, "", 0, "");
      $temp->deletejoueurs();
    }
  }
}

?>