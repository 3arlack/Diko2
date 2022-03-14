<?php

Class tours {
	private $_ID;
	private $_ID_MANCHE;
	private $mot_choisi;

	//S'appelle automatiquement à la création d'instance
    function __construct($ID, $ID_MANCHE, $MOT_CHOISI){
		$this->_ID = $ID;
		$this->_ID_MANCHE = $ID_MANCHE;
		$this->mot_choisi = $MOT_CHOISI;
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

	public function createtours(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('INSERT INTO tours (id_manche, mot_choisi) VALUES (:id_manche, :mot_choisi)');
			$stmt->bindParam(':id_manche', $this->_ID_MANCHE);
			$stmt->bindParam(':mot_choisi', $this->mot_choisi);
			$stmt->execute();//ferme la connexion à la base
      $this->_ID = $dbh->lastInsertId(); // récupère l'id de la partie créée
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
	}

	public function readtours(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd
    $liste_tours = array();

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('SELECT * FROM tours WHERE id_manche = :id_manche');
			$stmt->bindParam(':id_manche', $this->_ID_MANCHE);
			$stmt->execute();
      while ($row = $stmt->fetch()) {
        $singletours = new tours($row['id'], $row['id_manche'], $row['mot_choisi']);//ferme la connexion à la base
        array_push($liste_tours, $singletours);
      }
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
    $monTab = array();
    $i = 0;   

    // on transforme l'objet en tableau (récursif sur les objets)
    foreach($liste_tours as $tour){
      $array = $tour->toArray($tour);
      $monTab[$i] = $array;
      $i+=1;
    }

    $monJSON = json_encode($monTab);
    return $monJSON;
		}

	public function updatetours(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('UPDATE tours SET id_manche = :id_manche, mot_choisi = :mot_choisi WHERE id = :id');
			$stmt->bindParam(':id', $this->_ID);
			$stmt->bindParam(':id_manche', $this->_ID_MANCHE);
			$stmt->bindParam(':mot_choisi', $this->mot_choisi);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

	public function deletetours(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('DELETE FROM tours WHERE id = :id');
			$stmt->bindParam(':id', $this->_ID);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
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