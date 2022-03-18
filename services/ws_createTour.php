<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_tours.php");
require_once("../classes/class_parties.php");


  $partie = new parties($_POST['id_partie'],0,0);
  $nbDeJoueurs = count(array_filter($partie->getjoueur(),"filtre"));

  foreach($partie->getmanche() as $i => $manche){ // loop on rounds (manches)...

    for ($j=0 ; $j<$nbDeJoueurs ; $j++){
      $tour = new tours(0,$manche->get_ID(),tours::randomWord(),[]);
      $tour->createtours();
      $arrayResultat = array();

      for ($r =0; $r<$nbDeJoueurs ; $r++){
        $resultat = new resultat(0,"",$r,$tour->get_ID());
        array_push($arrayResultat,$resultat);
      }
      
      $goodResultat = new resultat(0,tours::goodDefinition($tour->getmot_choisi()),999,$tour->get_ID());
      array_push($arrayResultat,$goodResultat);
      shuffle($arrayResultat);

      foreach ($arrayResultat as $resultat){
        $resultat->createresultat();
      }
    }
  }

  $joueurNonConnectes = array_filter($partie->getjoueur(),"filtre2");
  foreach($joueurNonConnectes as $joueur){
    $joueur->deletejoueurs();
  }

  function filtre($nom_joueur){
    return $nom_joueur->getnom_joueur() != null;
  }

  function filtre2($nom_joueur){
    return $nom_joueur->getnom_joueur() == null;
  }






?>