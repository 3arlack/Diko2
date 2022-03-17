<?php

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
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('INSERT INTO votes (id_resultat, id_vote) VALUES (:id_resultat, :id_vote)');
			$stmt->bindParam(':id_resultat', $this->id_resultat);
			$stmt->bindParam(':id_vote', $this->id_vote);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

	public function readvotes(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('SELECT * FROM votes WHERE id_resultat = :id_resultat');
			$stmt->bindParam(':id_resultat', $this->id_resultat);
			$stmt->execute();
            $row = $stmt->fetch();
            $singlevotes = new votes($row['id'],$row['id_resultat'], $row['id_vote']);//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
		$monjSon = json_encode(array($singlevotes->toArray($singlevotes)));
        // Je l'affiche
        return $monjSon;
		}






	public function updatevotes(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('UPDATE votes SET id_resultat = :id_resultat, id_vote = :id_vote WHERE id = :id');
			$stmt->bindParam(':id', $this->_ID);
			$stmt->bindParam(':id_resultat', $this->id_resultat);
			$stmt->bindParam(':id_vote', $this->id_vote);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

	public function deletevotes(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
      $stmt = $dbh->prepare('DELETE FROM votes WHERE id_resultat = :id_resultat AND id_vote = :id_vote');
      $stmt->bindParam(':id_resultat', $this->id_resultat);
      $stmt->bindParam(':id_vote', $this->id_vote);
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