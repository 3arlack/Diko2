<?php

require_once("class_tours.php");
require_once("config/config.php");
Class manches {
	private $_ID;
	private $_ID_PARTIE;
  private $tours;

	//S'appelle automatiquement à la création d'instance
  function __construct($ID, $ID_PARTIE){
		$this->_ID = $ID;
		$this->_ID_PARTIE = $ID_PARTIE;
    $this->tours = $this->getTours();
	}

	public function get_ID(){
		return $this->_ID;
	}

	public function set_ID($_ID){
		$this->_ID = $_ID;
	}

	public function get_ID_PARTIE(){
		return $this->_ID_PARTIE;
	}

	public function set_ID_PARTIE($_ID_PARTIE){
		$this->_ID_PARTIE = $_ID_PARTIE;
	}

	public function gettour(){
		return $this->tours;
	}

	public function settours($tours){
		$this->tours = $tours;
	}

	public function createmanches(){
    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('INSERT INTO manches (id_partie) VALUES (:id_partie)');
    $stmt->bindParam(':id_partie', $this->_ID_PARTIE, PDO::PARAM_INT);
    $stmt->execute();
    $dbh = null;
	}

	// public function readmanches(){
  //   $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
  //   $stmt = $dbh->prepare('SELECT * FROM manches WHERE id = :id');
  //   $stmt->bindParam(':id', $this->_ID, PDO::PARAM_INT);
  //   $stmt->execute();
  //   $row = $stmt->fetch();
  //   $singlemanches = new manches($row['id'],$row['id_partie']);
  //   $dbh = null;
  //   $monjSon = '{$singlemanches:'.json_encode(array($singlemanches->toArray($singlemanches))).'}';
  //   return $monjSon;
  // }

	// public function updatemanches(){
  //   $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
  //   $stmt = $dbh->prepare('UPDATE manches SET id_partie = :id_partie WHERE id = :id');
  //   $stmt->bindParam(':id', $this->_ID, PDO::PARAM_INT);
  //   $stmt->bindParam(':id_partie', $this->_ID_PARTIE, PDO::PARAM_INT);
  //   $stmt->execute();
  //   $dbh = null;
	// }

	// public function deletemanches(){
  //   $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
  //   $stmt = $dbh->prepare('DELETE FROM manches WHERE id = :id');
  //   $stmt->bindParam(':id', $this->_ID, PDO::PARAM_INT);
  //   $stmt->execute();
  //   $dbh = null;
	// }

  function getTours(){
    $temp = array();
    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('SELECT * FROM tours WHERE id_manche = :id');
    $stmt->bindParam(':id', $this->_ID, PDO::PARAM_INT);
    $stmt->execute();
    while ($row = $stmt->fetch()) {
      $singleTour = new tours($row['id'], $row['id_manche'], $row['mot_choisi']);
      array_push($temp, $singleTour);
    }
    $dbh = null;
    return $temp;
  }

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