<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_resultat.php");

//TODO : maybe make readAllresultat a static function so we don't have to create a useless resultat object ?
// Creates a new resultat object with POSTed input data
$resultat = new resultat(0, "",0, $_POST["id_tour"]);
// Sends all resultat from current game turn
echo($resultat->readAllresultat());

?>