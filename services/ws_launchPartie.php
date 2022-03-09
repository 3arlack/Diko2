<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_parties.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  $temp = new parties($request->id, $request->mancheEnCours, $request->tourEnCours);
  $temp->setmanche($request->manche);
  $temp->setjoueur($request->joueur);
  // print_r($temp);
  // echo("Sroigzorig");
  // print_r($request);
  $temp->launchparties();
}


?>