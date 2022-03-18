<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_tours.php");

// Creates a new tours object with POSTed input data
$tour = new tours(0,$_POST["id_manche"],"");
// Sends back turn
echo($tour->readtours());

?>