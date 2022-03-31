<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_tours.php");
require_once("../classes/class_parties.php");


  $partie = new parties($_POST['id_partie'],0,0);//we initialize a Game instance with the current id_partie
  $nbDeJoueurs = count(array_filter($partie->getjoueur(),"filtre")); //number of players conneted (name is not null)

	$randomWords = array();

  foreach($partie->getmanche() as $manche){ // loop on rounds (manches)...

    for ($j=0 ; $j<$nbDeJoueurs ; $j++){ // as many as players connected ...
      $tour = new tours(0,$manche->get_ID(),tours::randomWord(),[]); //... we create a instance of "tours" (set), with the round ID and we choose a word (with the randomWord function)

			if(count($randomWords) > 1 ){
				for ($index = 0 ; $index < count($randomWords);$index++){
					if($randomWords[$index] == $tour->getmot_choisi()){
						$tour->setmot_choisi(tours::randomWord());
						$index = -1;
					}
				}
				array_push($randomWords, $tour->getmot_choisi());
			} else {
				array_push($randomWords, $tour->getmot_choisi());
			}
	

			// if(count($randomWords) > 1 ){
			// 	loop:
			// 	foreach($randomWords as $word){
			// 		if($word == $tour->getmot_choisi()){
			// 			$tour->setmot_choisi(tours::randomWord());
			// 			goto loop;
			// 		}
			// 	}
			// 	array_push($randomWords, $tour->getmot_choisi());
			// } else {
			// 	array_push($randomWords, $tour->getmot_choisi());
			// }

      $tour->createtours(); // we create the set in DB
      $arrayResultat = array(); //we initialize an array of "Resultat"

      for ($r =0; $r<$nbDeJoueurs ; $r++){//as many as players connected in the current set ...
        $resultat = new resultat(0,"",$r,$tour->get_ID()); //... we create an instance of "resultat" with an empty definition, a player ID, and the current set ID
        array_push($arrayResultat,$resultat);//we push the resultat in the array
      }
      
      //for each set, we create another resultat with the good definition this time, an id 999 and the current set ID
      $goodResultat = new resultat(0,tours::goodDefinition($tour->getmot_choisi()),999,$tour->get_ID());
      array_push($arrayResultat,$goodResultat); //we push the good resultat in the array 
      shuffle($arrayResultat);//function to shuffle the array to display the definition in different order

      foreach ($arrayResultat as $resultat){
        $resultat->createresultat();//we create each resultat in DB
      }
    }
  }

  $joueurNonConnectes = array_filter($partie->getjoueur(),"filtre2");//array of players not connected 
  foreach($joueurNonConnectes as $joueur){
    $joueur->deletejoueurs();// we delete those players in DB
  }


  //function to filter array of players connected
  function filtre($nom_joueur){
    return $nom_joueur->getnom_joueur() != null;
  }

  //function to filter array of players not connected
  function filtre2($nom_joueur){
    return $nom_joueur->getnom_joueur() == null;
  }






?>