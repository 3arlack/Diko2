<?php

Class joueurs {
	private $_ID;
	private $_ID_PARTIE;
	private $id_joueur;
	private $nom_joueur;
	private $score_joueur;
	private $avatar_joueur;

	//S'appelle automatiquement à la création d'instance
    function __construct($ID, $ID_PARTIE, $ID_JOUEUR, $NOM_JOUEUR, $SCORE_JOUEUR, $AVATAR_JOUEUR){
		$this->_ID = $ID;
		$this->_ID_PARTIE = $ID_PARTIE;
		$this->id_joueur = $ID_JOUEUR;
		$this->nom_joueur = $NOM_JOUEUR;
		$this->score_joueur = $SCORE_JOUEUR;
		$this->avatar_joueur = $AVATAR_JOUEUR;
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

	public function getid_joueur(){
		return $this->id_joueur;
	}

	public function setid_joueur($id_joueur){
		$this->id_joueur = $id_joueur;
	}

	public function getnom_joueur(){
		return $this->nom_joueur;
	}

	public function setnom_joueur($nom_joueur){
		$this->nom_joueur = $nom_joueur;
	}

	public function getscore_joueur(){
		return $this->score_joueur;
	}

	public function setscore_joueur($score_joueur){
		$this->score_joueur = $score_joueur;
	}

	public function getavatar_joueur(){
		return $this->avatar_joueur;
	}

	public function setavatar_joueur($avatar_joueur){
		$this->avatar_joueur = $avatar_joueur;
	}

	public function createjoueurs(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=', $user, $pass);
			$stmt = $dbh->prepare('INSERT INTO joueurs (id_partie, id_joueur, nom_joueur, score_joueur, avatar_joueur) VALUES (:id_partie, :id_joueur, :nom_joueur, :score_joueur, :avatar_joueur)');
			$stmt->bindParam(':id_partie', $this->_ID_PARTIE);
			$stmt->bindParam(':id_joueur', $this->id_joueur);
			$stmt->bindParam(':nom_joueur', $this->nom_joueur);
			$stmt->bindParam(':score_joueur', $this->score_joueur);
			$stmt->bindParam(':avatar_joueur', $this->avatar_joueur);
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
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=', $user, $pass);
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
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=', $user, $pass);
			$stmt = $dbh->prepare('UPDATE joueurs SET id_partie = :id_partie, id_joueur = :id_joueur, nom_joueur = :nom_joueur, score_joueur = :score_joueur, avatar_joueur = :avatar_joueur WHERE id = :id');
			$stmt->bindParam(':id', $this->_ID);
			$stmt->bindParam(':id_partie', $this->_ID_PARTIE);
			$stmt->bindParam(':id_joueur', $this->id_joueur);
			$stmt->bindParam(':nom_joueur', $this->nom_joueur);
			$stmt->bindParam(':score_joueur', $this->score_joueur);
			$stmt->bindParam(':avatar_joueur', $this->avatar_joueur);
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
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=', $user, $pass);
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