<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_joueurs.php");

// NOTE : this service receives an array of all players in a game and deletes ONLY the empty players (players with a "null" name) 

// Retrieve PUT HTTP Request : read php input
$data = file_get_contents("php://input");

// Check if request variable is set and not empty (if request is empty or invalid, we don't do anything)
if(isset($data) && !empty($data))
{
  // Extract the data.
  $request = json_decode($data);
  
  // Loop on received "joueur" array
  for($i=0 ; $i < count($request) ; $i++){
    if ($request[$i]->nom_joueur == null){ // if the player name of current player is null (so no player)...
      $temp = new joueurs($request[$i]->_ID,0, 0, "", 0, ""); // create a temp player object with player's database ID...
      $temp->deletejoueurs(); // and delete the player from DB !
    }
  }
}

?>