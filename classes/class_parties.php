<?php

require_once("class_manches.php");
require_once("class_joueurs.php");

Class parties {
	private $id;
	private $mancheEnCours;
	private $tourEnCours;
  private $manche=array();
  private $joueur=array();

	//S'appelle automatiquement à la création d'instance
    function __construct($ID, $MANCHEENCOURS, $TOURENCOURS){
		$this->id = $ID;
		$this->mancheEnCours = $MANCHEENCOURS;
		$this->tourEnCours = $TOURENCOURS;
    $this->manche = $this->getManches();
    $this->joueur = $this->getJoueurs();
	}

	public function getid(){
		return $this->id;
	}

	public function setid($id){
		$this->id = $id;
	}

	public function getmancheEnCours(){
		return $this->mancheEnCours;
	}

	public function setmancheEnCours($mancheEnCours){
		$this->mancheEnCours = $mancheEnCours;
	}

	public function gettourEnCours(){
		return $this->tourEnCours;
	}

	public function settourEnCours($tourEnCours){
		$this->tourEnCours = $tourEnCours;
	}

	public function createparties(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('INSERT INTO parties (mancheEnCours, tourEnCours) VALUES (:mancheEnCours, :tourEnCours)');
			$stmt->bindParam(':mancheEnCours', $this->mancheEnCours);
			$stmt->bindParam(':tourEnCours', $this->tourEnCours);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

	public function readparties(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('SELECT * FROM parties WHERE id = :id');
			$stmt->bindParam(':id', $this->id);
			$stmt->execute();
            $row = $stmt->fetch();
            $singleparties = new parties($row['mancheEnCours'], $row['tourEnCours']);//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
		$monjSon = '{$singleparties:'.json_encode(array($singleparties->toArray($singleparties))).'}';
        // Je l'affiche
        return $monjSon;
  }

	public function updateparties(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
      $stmt = $dbh->prepare('UPDATE parties SET mancheEnCours = :mancheEnCours, tourEnCours = :tourEnCours WHERE id = :id');
      $stmt->bindParam(':id', $this->id);
      $stmt->bindParam(':mancheEnCours', $this->mancheEnCours);
      $stmt->bindParam(':tourEnCours', $this->tourEnCours);
      $stmt->execute();//ferme la connexion à la base
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
	}

	public function deleteparties(){
        $user = 'ubvs6386'; // Identifiant de bdd
        $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass);
			$stmt = $dbh->prepare('DELETE FROM parties WHERE id = :id');
			$stmt->bindParam(':id', $this->id);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

  
  public static function readAllParties(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd
    $liste_parties = array();

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
    // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
      $stmt = $dbh->prepare('SELECT * FROM parties');
      $stmt->execute();
      while ($row = $stmt->fetch()) {
        $onePartie = new parties($row['id'], $row['mancheEnCours'], $row['tourEnCours']);
        array_push($liste_parties, $onePartie);
      }
      //ferme la connexion à la base
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }

    $monTab = array();
    $i = 0;   

    // on transforme l'objet en tableau (récursif sur les objets)
    foreach($liste_parties as $partie){
      $array = $partie->toArray($partie);
      $monTab[$i] = $array;
      $i+=1;
    }

    $monJSON = json_encode($monTab);
    return $monJSON;
  }

  function getManches(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd
    $temp = array();

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
    // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')  );
			$stmt = $dbh->prepare('SELECT * FROM manches WHERE id_partie = :id');
			$stmt->bindParam(':id', $this->id);
      $stmt->execute();

      while ($row = $stmt->fetch()) {
        $singlemanche = new manches($row['id'], $row['id_partie']);//ferme la connexion à la base
        array_push($temp, $singlemanche);
      }
      //ferme la connexion à la base
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      // die();
    }

    return $temp;
  }

  function getJoueurs(){
    $user = 'ubvs6386'; // Identifiant de bdd
    $pass = 'WVHXr$DAb-cC'; // Mot de passe bdd
    $temp = array();

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
    // connexion à la base de donnée
      $dbh = new PDO('mysql:host=127.0.0.1;dbname=ubvs6386_diko', $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')  );
			$stmt = $dbh->prepare('SELECT * FROM joueurs WHERE id_partie = :id');
			$stmt->bindParam(':id', $this->id);
      $stmt->execute();

      while ($row = $stmt->fetch()) {
        $singleJoueur = new joueurs($row['id'], $row['id_partie'], $row['id_joueur'], $row['nom_joueur'], $row['score_joueur'], $row['avatar_joueur']);//ferme la connexion à la base
        array_push($temp, $singleJoueur);
      }
      //ferme la connexion à la base
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      // die();
    }

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