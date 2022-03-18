<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_parties.php");

// NOTE : this service retrieves the requested game and checks how many definitions are still empty (means that players have not yet given their answers) and send it back to the app to update progress.

// we create a class to correctly format response so our app can retrieve the results : we need to know the number of empty "definitions" and total number of players.
Class test {
  public $nbDefNull;
  public $nbJoueurs;
}

// Create a "parties" object to retrieve all the data of current game
$temp = new parties($_POST['id'],$_POST['mancheEnCours'],$_POST['tourEnCours']);

// Create a test object
$test = new test();

// Retrieve number of empty player definitions using array_filter (calls function "filtre" below)
$test->nbDefNull = count(array_filter($temp->getmanche()[$temp->getmancheEnCours()]->gettour()[$temp->gettourEnCours()]->getresultat(),"filtre"));

//Also retrieves number of players
$test->nbJoueurs = count($temp->getjoueur());

// send "test" object
echo(json_encode($test));

// returns only elements of source array that are "null"
function filtre($resultat){
  return $resultat->getdefinition() == null;
}

?>