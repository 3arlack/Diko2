<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_resultat.php");

$tableauResultat = array();

//crée des résultats vides pour chaque joueur
for ($i=0;$i<$_POST['nbJoueurs'];$i++){
  $temp = new resultat(0, null, $i, $_POST['id_tour']);
  array_push($tableauResultat,$temp);
}

//rajoute la bonne définition
$good = json_decode($_POST['goodResultat'],false);
$goodresultat = new resultat(0,$good->definition,$good->id_joueur,$good->_ID_TOUR);
array_push($tableauResultat,$goodresultat);

shuffle($tableauResultat); //on mélange

//On crée en DB
for ($i = 0 ; $i < count($tableauResultat) ; $i++){
  $tableauResultat[$i]->createresultat();
}

?>