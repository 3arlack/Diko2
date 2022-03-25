<?php

require_once("class_resultat.php");
require_once("config/config.php");
Class tours {
	private $_ID;
	private $_ID_MANCHE;
	private $mot_choisi;
  private $resultat;


    function __construct($ID, $ID_MANCHE, $MOT_CHOISI){
		$this->_ID = $ID;
		$this->_ID_MANCHE = $ID_MANCHE;
		$this->mot_choisi = $MOT_CHOISI;
    $this->resultat = $this->getResultats();
	}

	public function get_ID(){
		return $this->_ID;
	}

	public function set_ID($_ID){
		$this->_ID = $_ID;
	}

	public function get_ID_MANCHE(){
		return $this->_ID_MANCHE;
	}

	public function set_ID_MANCHE($_ID_MANCHE){
		$this->_ID_MANCHE = $_ID_MANCHE;
	}

	public function getmot_choisi(){
		return $this->mot_choisi;
	}

	public function setmot_choisi($mot_choisi){
		$this->mot_choisi = $mot_choisi;
	}

	public function getresultat(){
		return $this->resultat;
	}

	public function setresultat($resultat){
		$this->resultat = $resultat;
	}

	public function createtours(){
  
    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('INSERT INTO tours (id_manche, mot_choisi) VALUES (:id_manche, :mot_choisi)');
    $stmt->bindParam(':id_manche', $this->_ID_MANCHE);
    $stmt->bindParam(':mot_choisi', $this->mot_choisi);
    $stmt->execute();
    $this->_ID = $dbh->lastInsertId(); //get the last ID
    $dbh = null;
   
	}

	public function readtours(){
    $liste_tours = array();

    $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $stmt = $dbh->prepare('SELECT * FROM tours WHERE id_manche = :id_manche');
    $stmt->bindParam(':id_manche', $this->_ID_MANCHE);
    $stmt->execute();
    while ($row = $stmt->fetch()) {
      $singletours = new tours($row['id'], $row['id_manche'], $row['mot_choisi']);
      array_push($liste_tours, $singletours);
    }
    $dbh = null;

    $monTab = array();
    $i = 0;   

    foreach($liste_tours as $tour){
      $array = $tour->toArray($tour);
      $monTab[$i] = $array;
      $i+=1;
    }

    $monJSON = json_encode($monTab);
    return $monJSON;
	}



	// public function updatetours(){
  //   $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
  //   $stmt = $dbh->prepare('UPDATE tours SET id_manche = :id_manche, mot_choisi = :mot_choisi WHERE id = :id');
  //   $stmt->bindParam(':id', $this->_ID);
  //   $stmt->bindParam(':id_manche', $this->_ID_MANCHE);
  //   $stmt->bindParam(':mot_choisi', $this->mot_choisi);
  //   $stmt->execute();//ferme la connexion à la base
  //   $dbh = null;
	// }

	// public function deletetours(){
  //   $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
  //   $stmt = $dbh->prepare('DELETE FROM tours WHERE id = :id');
  //   $stmt->bindParam(':id', $this->_ID);
  //   $stmt->execute();//ferme la connexion à la base
  //   $dbh = null;
	// }

  function getResultats(){
    $temp = array();

      $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('SELECT * FROM resultat WHERE id_tour = :id');
			$stmt->bindParam(':id', $this->_ID);
      $stmt->execute();

      while ($row = $stmt->fetch()) {
        $singleResultat = new resultat($row['id'], $row['definition'], $row['id_joueur'], $row['id_tour']);//ferme la connexion à la base
        array_push($temp, $singleResultat);
      }

      $dbh = null;
    return $temp;
  }

  //get a random word from our json of word 
  public static function randomWord(){
    $data = file_get_contents('mots_rares.json');
    $data = json_decode($data);

    $randomIndex = rand(0,count($data->data));

    return $data->data[$randomIndex]->word;
  }

  //Get the good definiton from JSON database
  public static function goodDefinition($word){
    $data = file_get_contents('mots_rares.json');
    $data = json_decode($data);

    $index = array_search($word, array_column($data->data,'word'));
    return $data->data[$index]->def;   
     
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