<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_resultat.php");

// Array of results
$tableauResultat = array();

// Creates as many empty results as there are players
for ($i=0;$i<$_POST['nbJoueurs'];$i++){
  $temp = new resultat(0, null, $i, $_POST['id_tour']);
  // add the created result object in array of results
  array_push($tableauResultat,$temp);
}

// retrieves correct definition from POST data (JSON object stringified so we decode it) and add it to results array
$good = json_decode($_POST['goodResultat'],false);
$goodresultat = new resultat(0,$good->definition,$good->id_joueur,$good->_ID_TOUR);
array_push($tableauResultat,$goodresultat);

// Randomly shuffles array so results are not always at the same position (especially for the correct definition !)
shuffle($tableauResultat);

// Loop on results array and create each "resultat" in DB
for ($i = 0 ; $i < count($tableauResultat) ; $i++){
  $tableauResultat[$i]->createresultat();
}

?>