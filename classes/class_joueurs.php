<?php

Class joueurs {
	private $_ID;
	private $_ID_PARTIE;
	private $_ID_JOUEUR;
	private $_NOM_JOUEUR;
	private $_SCORE_JOUEUR;
	private $_AVATAR_JOUEUR;

	//S'appelle automatiquement à la création d'instance
    function __construct($ID, $ID_PARTIE, $ID_JOUEUR, $NOM_JOUEUR, $SCORE_JOUEUR, $AVATAR_JOUEUR){
		$this->_ID = $ID;
		$this->_ID_PARTIE = $ID_PARTIE;
		$this->_ID_JOUEUR = $ID_JOUEUR;
		$this->_NOM_JOUEUR = $NOM_JOUEUR;
		$this->_SCORE_JOUEUR = $SCORE_JOUEUR;
		$this->_AVATAR_JOUEUR = $AVATAR_JOUEUR;
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

	public function get_ID_JOUEUR(){
		return $this->_ID_JOUEUR;
	}

	public function set_ID_JOUEUR($_ID_JOUEUR){
		$this->_ID_JOUEUR = $_ID_JOUEUR;
	}

	public function get_NOM_JOUEUR(){
		return $this->_NOM_JOUEUR;
	}

	public function set_NOM_JOUEUR($_NOM_JOUEUR){
		$this->_NOM_JOUEUR = $_NOM_JOUEUR;
	}

	public function get_SCORE_JOUEUR(){
		return $this->_SCORE_JOUEUR;
	}

	public function set_SCORE_JOUEUR($_SCORE_JOUEUR){
		$this->_SCORE_JOUEUR = $_SCORE_JOUEUR;
	}

	public function get_AVATAR_JOUEUR(){
		return $this->_AVATAR_JOUEUR;
	}

	public function set_AVATAR_JOUEUR($_AVATAR_JOUEUR){
		$this->_AVATAR_JOUEUR = $_AVATAR_JOUEUR;
	}

	public function createjoueurs(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('INSERT INTO joueurs (id_partie, id_joueur, nom_joueur, score_joueur, avatar_joueur) VALUES (:id_partie, :id_joueur, :nom_joueur, :score_joueur, :avatar_joueur)');
			$stmt->bindParam(':id_partie', $this->_ID_PARTIE);
			$stmt->bindParam(':id_joueur', $this->_ID_JOUEUR);
			$stmt->bindParam(':nom_joueur', $this->_NOM_JOUEUR);
			$stmt->bindParam(':score_joueur', $this->_SCORE_JOUEUR);
			$stmt->bindParam(':avatar_joueur', $this->_AVATAR_JOUEUR);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

	public function readjoueurs(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('SELECT * FROM joueurs WHERE id = :id');
			$stmt->bindParam(':id', $this->_ID);
			$stmt->execute();
            $row = $stmt->fetch();
            $singlejoueurs = new joueurs($row['id_partie'], $row['id_joueur'], $row['nom_joueur'], $row['score_joueur'], $row['avatar_joueur']);//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
		$monjSon = '{$singlejoueurs:'.json_encode(array($singlejoueurs->toArray($singlejoueurs))).'}';
        // Je l'affiche
        return $monjSon;
		}

	public function updatejoueurs(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('UPDATE joueurs SET id_partie = :id_partie, id_joueur = :id_joueur, nom_joueur = :nom_joueur, score_joueur = :score_joueur, avatar_joueur = :avatar_joueur WHERE id = :id');
			$stmt->bindParam(':id', $this->_ID);
			$stmt->bindParam(':id_partie', $this->_ID_PARTIE);
			$stmt->bindParam(':id_joueur', $this->_ID_JOUEUR);
			$stmt->bindParam(':nom_joueur', $this->_NOM_JOUEUR);
			$stmt->bindParam(':score_joueur', $this->_SCORE_JOUEUR);
			$stmt->bindParam(':avatar_joueur', $this->_AVATAR_JOUEUR);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

	public function deletejoueurs(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('DELETE FROM joueurs WHERE id = :id');
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