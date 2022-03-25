<?php
require_once("config/config.php");
Class votes {
	private $_ID;
	private $id_resultat;
	private $id_vote;
    

	//S'appelle automatiquement à la création d'instance
    function __construct($ID, $ID_RESULTAT, $ID_VOTE){
		$this->_ID = $ID;
		$this->id_resultat = $ID_RESULTAT;
		$this->id_vote = $ID_VOTE;
	}

	public function get_ID(){
		return $this->_ID;
	}

	public function set_ID($_ID){
		$this->_ID = $_ID;
	}

	public function getid_resultat(){
		return $this->id_resultat;
	}

	public function setid_resultat($id_resultat){
		$this->id_resultat = $id_resultat;
	}

	public function getid_vote(){
		return $this->id_vote;
	}

	public function setid_vote($id_vote){
		$this->id_vote = $id_vote;
	}

	public function createvotes(){

        $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
        $stmt = $dbh->prepare('INSERT INTO votes (id_resultat, id_vote) VALUES (:id_resultat, :id_vote)');
        $stmt->bindParam(':id_resultat', $this->id_resultat);
        $stmt->bindParam(':id_vote', $this->id_vote);
        $stmt->execute();//ferme la connexion à la base
        $dbh = null;
        
	}

    public function deletevotes(){

        $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
        $stmt = $dbh->prepare('DELETE FROM votes WHERE id_resultat = :id_resultat AND id_vote = :id_vote');
        $stmt->bindParam(':id_resultat', $this->id_resultat);
        $stmt->bindParam(':id_vote', $this->id_vote);
        $stmt->execute();
        $dbh = null;
     
      }

	// public function readvotes(){

    //     $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    //     $stmt = $dbh->prepare('SELECT * FROM votes WHERE id_resultat = :id_resultat');
    //     $stmt->bindParam(':id_resultat', $this->id_resultat);
    //     $stmt->execute();
    //     $row = $stmt->fetch();
    //     $singlevotes = new votes($row['id'],$row['id_resultat'], $row['id_vote']);//ferme la connexion à la base
    //     $dbh = null;
       
	// 	$monjSon = json_encode(array($singlevotes->toArray($singlevotes)));
    //     // Je l'affiche
    //     return $monjSon;
	// }



	// public function updatevotes(){

    //     $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    //     $stmt = $dbh->prepare('UPDATE votes SET id_resultat = :id_resultat, id_vote = :id_vote WHERE id = :id');
    //     $stmt->bindParam(':id', $this->_ID);
    //     $stmt->bindParam(':id_resultat', $this->id_resultat);
    //     $stmt->bindParam(':id_vote', $this->id_vote);
    //     $stmt->execute();//ferme la connexion à la base
    //     $dbh = null;

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