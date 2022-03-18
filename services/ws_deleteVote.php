<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_votes.php");

// Creates a new votes object with POSTed input data
$vote = new votes(0, $_POST['idResultat'], $_POST['idVote'],);
// We delete the vote from database
$vote->deletevotes();

?>