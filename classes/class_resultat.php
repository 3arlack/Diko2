<?php

Class resultat {
	private $_ID;
	private $_DEFINITION;
	private $_ID_JOUEUR;
	private $_ID_TOUR;

	//S'appelle automatiquement à la création d'instance
    function __construct($ID, $DEFINITION, $ID_JOUEUR, $ID_TOUR){
		$this->_ID = $ID;
		$this->_DEFINITION = $DEFINITION;
		$this->_ID_JOUEUR = $ID_JOUEUR;
		$this->_ID_TOUR = $ID_TOUR;
	}

	public function get_ID(){
		return $this->_ID;
	}

	public function set_ID($_ID){
		$this->_ID = $_ID;
	}

	public function get_DEFINITION(){
		return $this->_DEFINITION;
	}

	public function set_DEFINITION($_DEFINITION){
		$this->_DEFINITION = $_DEFINITION;
	}

	public function get_ID_JOUEUR(){
		return $this->_ID_JOUEUR;
	}

	public function set_ID_JOUEUR($_ID_JOUEUR){
		$this->_ID_JOUEUR = $_ID_JOUEUR;
	}

	public function get_ID_TOUR(){
		return $this->_ID_TOUR;
	}

	public function set_ID_TOUR($_ID_TOUR){
		$this->_ID_TOUR = $_ID_TOUR;
	}

	public function createresultat(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('INSERT INTO resultat (definition, id_joueur, id_tour) VALUES (:definition, :id_joueur, :id_tour)');
			$stmt->bindParam(':definition', $this->_DEFINITION);
			$stmt->bindParam(':id_joueur', $this->_ID_JOUEUR);
			$stmt->bindParam(':id_tour', $this->_ID_TOUR);
			$stmt->execute();//ferme la connexion à la base
      $this->_ID = $dbh->lastInsertId(); // récupère l'id de la partie créée
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
	}

	public function readresultat(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('SELECT * FROM resultat WHERE id_joueur = :id_joueur AND id_tour = :id_tour');
			$stmt->bindParam(':id_joueur', $this->_ID_JOUEUR);
			$stmt->bindParam(':id_tour', $this->_ID_TOUR);
			$stmt->execute();
      $row = $stmt->fetch();
      $singleresultat = new resultat($row['id'], $row['definition'], $row['id_joueur'], $row['id_tour']);//ferme la connexion à la base
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
      return $singleresultat->get_ID();
		}


    
	public function readAllResultat(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd
    $liste_resultat = array();

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('SELECT * FROM resultat WHERE id_tour = :id_tour');
			$stmt->bindParam(':id_tour', $this->_ID_TOUR);
			$stmt->execute();
      while ($row = $stmt->fetch()) {
      $singleresultat = new resultat($row['id'], $row['definition'], $row['id_joueur'], $row['id_tour']);//ferme la connexion à la base
      array_push($liste_resultat, $singleresultat);
    }
      $dbh = null;
    }catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
    $monTab = array();
    $i = 0;   

    // on transforme l'objet en tableau (récursif sur les objets)
    foreach($liste_resultat as $monResultat){
      $array = $monResultat->toArray($monResultat);
      $monTab[$i] = $array;
      $i+=1;
    }

    $monJSON = json_encode($monTab);
    return $monJSON;
		}


	public function updateresultat(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('UPDATE resultat SET definition = :definition WHERE id = :id');
			$stmt->bindParam(':id', $this->_ID);
			$stmt->bindParam(':definition', $this->_DEFINITION);
			$stmt->execute();//ferme la connexion à la base
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
	}

	public function deleteresultat(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('DELETE FROM resultat WHERE id = :id');
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