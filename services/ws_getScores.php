<?php
header("Access-Control-Allow-Origin: *"); // permet le debug en local
header("Access-Control-Allow-Methods: *"); // permet le debug en local
header("Access-Control-Allow-Headers: *"); // permet le debug en local
ini_set('display_errors', 1); // affiche toutes les erreurs
error_reporting(E_ALL); // affiche toutes les erreurs

require_once("../classes/class_parties.php");

//NOTE : This service retrieves the requested game data and calculates final scores for each player, then sends back the game data to the app. We don't update the DB with the computed scores (not necessary).

//GAME RULES TO UNDERSTAND LOGIC : Two possibilities to get points :
// 1- If a player votes for the correct definition, he gets a point ;
// 2- When someone votes for another player's definition, the player that created the definition gets a point ;
// 2-a) If a player votes for his own definition, he doesn't get a point.

// Creates game object to retrieve game info
$partie = new parties($_POST["id"],0,0);

//TODO : check if indexes are not needed, they can be removed from "foreach" syntaxes
// Start loop-ception ; in requested game...
foreach($partie->getmanche() as $i => $manche){ // loop on rounds (manches)...
  foreach($manche->gettours() as $y => $tour){ // then loop on turns (tours)...
    foreach ($tour->getresultat() as $z => $resultat){ // then loop on results (resultats)...
      //TODO : could be optimized for clarity : code repetition could be avoided (the 2 next foreach are very similar)
      if ($resultat->getid_joueur() == 999){ // if property id_joueur of current result is 999 (means it is the correct definition, not a real player)...
        // loop on votes (id_vote array)...
        foreach ($resultat->getid_vote() as $a => $vote){
          $score = $partie->getjoueur()[$vote]->getscore_joueur(); // Retrieve score of player that voted for correct definition
          $score++; // Increment score (+1)
          $partie->getjoueur()[$vote]->setscore_joueur($score); // Set updated score of player
        }
      } else { // else, if property id_joueur of current result IS NOT 999 (means it is a real player)...
        // loop on votes (id_vote array)...
        foreach ($resultat->getid_vote() as $a => $vote){
          // Check if player hasn't voted for its own definition
          if($vote != $partie->getjoueur()[$resultat->getid_joueur()]->getid_joueur()){
            $score = $partie->getjoueur()[$resultat->getid_joueur()]->getscore_joueur(); // Get score of player that created the definition
            $score++; // Increment score (+1)
            $partie->getjoueur()[$resultat->getid_joueur()]->setscore_joueur($score); // Set updated new score of player
          }
        }
      }
    }
  }
}

// Sends back full game object with updated scores
echo(json_encode($partie->toArray($partie)));

?>