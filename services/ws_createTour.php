<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_tours.php");

$data = file_get_contents("php://input");

if(isset($data) && !empty($data))
{
  // Extract the data.
  $request = json_decode($data);
  $temp = new tours(0, $request->_ID_MANCHE,$request->mot_choisi);
  $temp->createtours();
  echo($temp->get_ID());
}

?>