CREATE TABLE `parties` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_joueur` int,
  `id_manche` int
);

CREATE TABLE `joueurs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_joueur` int,
  `nom_joueur` varchar(255),
  `score_joueur` int,
  `avatar_joueur` varchar(255)
);

CREATE TABLE `manches` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_tours` int
);

CREATE TABLE `tours` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mot_choisi` varchar(255),
  `id_resultat` int
);

CREATE TABLE `resultat` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `definition` varchar(255),
  `id_joueur` int,
  `id_vote` int
);

CREATE TABLE `votes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_vote` int
);

ALTER TABLE `parties` ADD FOREIGN KEY (`id_joueur`) REFERENCES `joueurs` (`id`);

ALTER TABLE `parties` ADD FOREIGN KEY (`id_manche`) REFERENCES `manches` (`id`);

ALTER TABLE `manches` ADD FOREIGN KEY (`id_tours`) REFERENCES `tours` (`id`);

ALTER TABLE `tours` ADD FOREIGN KEY (`id_resultat`) REFERENCES `resultat` (`id`);

ALTER TABLE `resultat` ADD FOREIGN KEY (`id_vote`) REFERENCES `votes` (`id`);
