<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_resultat.php");

// Creates a new resultat object with POSTed input data
$resultat = new resultat(0, "", $_POST["id_joueur"], $_POST["id_tour"]);
// Sends back result
echo($resultat->readresultat());

?>