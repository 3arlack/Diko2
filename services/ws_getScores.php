<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_parties.php");

$partie = new parties($_POST["id"],0,0);

foreach($partie->getmanche() as $i => $manche){
  foreach($manche->gettours() as $y => $tour){
    foreach ($tour->getresultat() as $z => $resultat){
      if ($resultat->getid_joueur() == 999){
        foreach ($resultat->getid_vote() as $a => $vote){
          $score = $partie->getjoueur()[$vote]->getscore_joueur();
          $score++;
          $partie->getjoueur()[$vote]->setscore_joueur($score);
        }

      } else {
        foreach ($resultat->getid_vote() as $a => $vote){
          if($vote != $partie->getjoueur()[$resultat->getid_joueur()]->getid_joueur()){
            $score = $partie->getjoueur()[$resultat->getid_joueur()]->getscore_joueur();
            $score++;
            $partie->getjoueur()[$resultat->getid_joueur()]->setscore_joueur($score);
          }
        }
      }
    }
  }
}

echo(json_encode($partie->toArray($partie)));

?>