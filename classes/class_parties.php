<?php

require_once("class_joueurs.php");
require_once("class_manches.php");
require_once("config/config.php");


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

  public function getmanche(){
		return $this->manche;
	}

	public function setmanche($manche){
		$this->manche = $manche;
	}

  public function getjoueur(){
		return $this->joueur;
	}

	public function setjoueur($joueur){
		$this->joueur = $joueur;
	}

	public function createparties(){

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
      $stmt = $dbh->prepare('INSERT INTO parties (mancheEnCours, tourEnCours) VALUES (:mancheEnCours, :tourEnCours)');
      $stmt->bindParam(':mancheEnCours', $this->mancheEnCours);
      $stmt->bindParam(':tourEnCours', $this->tourEnCours);
      $stmt->execute();//ferme la connexion à la base
      $this->id = $dbh->lastInsertId(); // récupère l'id de la partie créée
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }

    $i = 0; // variable index pour se repérer dans les joueurs !

    //Pour chaque joueur de l'objet "partie" en cours, on crée un joueur en BDD ; 
    foreach($this->joueur as $joueur){
      if($joueur->id_joueur == null){
        // si le joueur est vide, on lui donne un id arbitraire (variable $i)
        $nouveauJoueur = new joueurs(0,$this->getid(),$i,$joueur->nom_joueur,$joueur->score_joueur,$joueur->avatar_joueur);
      } else { // sinon, on reprend l'id du joueur
        $nouveauJoueur = new joueurs(0,$this->getid(),$joueur-> id_joueur,$joueur->nom_joueur,$joueur->score_joueur,$joueur->avatar_joueur);
      }
      $nouveauJoueur->createjoueurs();
      $i++;
    }

    //on crée des manches vides
    foreach($this->manche as $manche){
      $nouvelleManche = new manches(0,$this->getid());
      $nouvelleManche->createmanches();
    }
    echo($this->id);
	}

	public function readparties(){

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
      // connexion à la base de donnée
      $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
      $stmt = $dbh->prepare('SELECT * FROM parties WHERE id = :id');
      $stmt->bindParam(':id', $this->id);
      $stmt->execute();
      $row = $stmt->fetch();
      $singleparties = new parties($row['id'],$row['mancheEnCours'], $row['tourEnCours']);//ferme la connexion à la base
      $dbh = null;
    } catch (PDOException $e) {
      print 'Erreur !: ' . $e->getMessage() . '<br/>';
      die();
    }
		$monjSon = json_encode($singleparties->toArray($singleparties));
    // // Je l'affiche
    return $monjSon;
    // return $singleparties;

  }

	public function updateparties(){

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
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

        // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
        try {
            // connexion à la base de donnée
            $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('DELETE FROM parties WHERE id = :id');
			$stmt->bindParam(':id', $this->id);
			$stmt->execute();//ferme la connexion à la base
            $dbh = null;
        } catch (PDOException $e) {
            print 'Erreur !: ' . $e->getMessage() . '<br/>';
            die();
        }
	}

    function getManches(){
    $temp = array();

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
    // connexion à la base de donnée
      $dbh = new PDO(DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
			$stmt = $dbh->prepare('SELECT * FROM manches WHERE id_partie = :id');
			$stmt->bindParam(':id', $this->id);
      $stmt->execute();

      while ($row = $stmt->fetch()) {
        $singlemanche = new manches($row['id'], $row['id_partie']); //ferme la connexion à la base
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
    $temp = array();

    // 127.0.0.1 est l'adresse ip locale du serveur (le fichier php étant exécuté sur le serveur, l'adresse du serveur est donc l'adresse locale)
    try {
    // connexion à la base de donnée
      $dbh = new PDO(DB_NAME, DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')  );
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