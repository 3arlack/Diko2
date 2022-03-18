<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_parties.php");

//TODO : check if this service is still used ? Not sure.

// Retrieve PUT HTTP Request : read php input
$data = file_get_contents("php://input");

// Check if request variable is set and not empty (if request is empty or invalid, we don't do anything)
if(isset($data) && !empty($data))
{
  // Extract the data.
  $request = json_decode($data);
  // Create a new parties object with input data
  $temp = new parties($request->id, $request->mancheEnCours, $request->tourEnCours);
  // Sets "manche" and "joueur" property separately as they're not included in the constructor
  $temp->setmanche($request->manche);
  $temp->setjoueur($request->joueur);
  // Update game in database
  $temp->updateparties();
}

?>