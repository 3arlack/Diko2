<?php

require_once('class_votes.php');
require_once("config/config.php");

Class resultat {
	private $_ID;
	private $definition;
	private $id_joueur;
	private $_ID_TOUR;
  private $id_vote = array();

    function __construct($ID, $DEFINITION, $ID_JOUEUR, $ID_TOUR){
		$this->_ID = $ID;
		$this->definition = $DEFINITION;
		$this->id_joueur = $ID_JOUEUR;
		$this->_ID_TOUR = $ID_TOUR;
    $this->id_vote=$this->getVote();
	}

	public function get_ID(){
		return $this->_ID;
	}

	public function set_ID($_ID){
		$this->_ID = $_ID;
	}

	public function getdefinition(){
		return $this->definition;
	}

	public function setdefinition($definition){
		$this->definition = $definition;
	}

	public function getid_joueur(){
		return $this->id_joueur;
	}

	public function setid_joueur($id_joueur){
		$this->id_joueur = $id_joueur;
	}

	public function get_ID_TOUR(){
		return $this->_ID_TOUR;
	}

	public function set_ID_TOUR($_ID_TOUR){
		$this->_ID_TOUR = $_ID_TOUR;
	}

  public function getid_vote(){
		return $this->id_vote;
	}

  function getVote(){
    $liste_vote = array();

    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('SELECT * FROM votes WHERE id_resultat = :id_resultat');
    $stmt->bindParam(':id_resultat', $this->_ID, PDO::PARAM_INT);
    $stmt->execute();
    while ($row = $stmt->fetch()) {
      $singlevotes = intval($row['id_vote']);
      array_push($liste_vote, $singlevotes);
    }
    
    $dbh = null;
    return $liste_vote;
  }

	public function readresultat(){

    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('SELECT * FROM resultat WHERE id_joueur = :id_joueur AND id_tour = :id_tour');
    $stmt->bindParam(':id_joueur', $this->id_joueur, PDO::PARAM_INT);
    $stmt->bindParam(':id_tour', $this->_ID_TOUR, PDO::PARAM_INT);
    $stmt->execute();
    $row = $stmt->fetch();
    $singleresultat = new resultat($row['id'], $row['definition'], $row['id_joueur'], $row['id_tour']);
    $dbh = null;

    return $singleresultat->get_ID();
	}

    
	public function readAllResultat(){
    $liste_resultat = array();

    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('SELECT * FROM resultat WHERE id_tour = :id_tour');
    $stmt->bindParam(':id_tour', $this->_ID_TOUR, PDO::PARAM_INT);
    $stmt->execute();
    while ($row = $stmt->fetch()) {
      $singleresultat = new resultat($row['id'], $row['definition'], $row['id_joueur'], $row['id_tour']);
      array_push($liste_resultat, $singleresultat);
    }

    $dbh = null;
   
    $monTab = array();
    $i = 0;   


    foreach($liste_resultat as $monResultat){
      $array = $monResultat->toArray($monResultat);
      $monTab[$i] = $array;
      $i+=1;
    }

    $monJSON = json_encode($monTab);
    return $monJSON;
	}


	public function updateresultat(){
    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('UPDATE resultat SET definition = :definition WHERE id = :id');
    $stmt->bindParam(':id', $this->_ID, PDO::PARAM_INT);
    $stmt->bindParam(':definition', $this->definition, PDO::PARAM_STR);
    $stmt->execute();
    $dbh = null;
	}

	// public function deleteresultat(){
  //   $dbh = new PDO(DB_NAME, DB_USER, DB_PASS);
  //   $stmt = $dbh->prepare('DELETE FROM resultat WHERE id = :id');
  //   $stmt->bindParam(':id', $this->_ID);
  //   $stmt->execute();//ferme la connexion à la base
  //   $dbh = null;
	// }

  	// public function createresultat(){
  //   $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
  //   $stmt = $dbh->prepare('INSERT INTO resultat (definition, id_joueur, id_tour) VALUES (:definition, :id_joueur, :id_tour)');
  //   $stmt->bindParam(':definition', $this->definition);
  //   $stmt->bindParam(':id_joueur', $this->id_joueur);
  //   $stmt->bindParam(':id_tour', $this->_ID_TOUR);
  //   $stmt->execute();
  //   $this->_ID = $dbh->lastInsertId(); 
  //   $dbh = null;
	// }


	// permet de créer un json contenant les objets des objets
    public function toArray(){
        $array = get_object_vars($this);
        unset($array['_parent'], $array['_index']);
        array_walk_recursive($array, function (&$property) {
            if (is_object($property) && method_exists($property, 'toArray')) {
                $property = $property->toArray();
            }
        });
        return $array;
    }

}
?>