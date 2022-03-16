<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_parties.php");

Class test {
  public $nbDefNull;
  public $nbJoueurs;
}

$temp = new parties($_POST['id'],$_POST['mancheEnCours'],$_POST['tourEnCours']);

// $json = json_encode("nbPartiesNull :".count(array_filter($temp->getmanche()[$temp->getmancheEnCours()]->gettour()[$temp->gettourEnCours()]->getresultat(),"filtre")).", nbJoueurs :".count($temp->getjoueur()));

$test = new test();
$test->nbDefNull = count(array_filter($temp->getmanche()[$temp->getmancheEnCours()]->gettour()[$temp->gettourEnCours()]->getresultat(),"filtre"));
$test->nbJoueurs = count($temp->getjoueur());

echo(json_encode($test));


function filtre($resultat){
  return $resultat->getdefinition() == null;
}

?>