-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 10 jan. 2022 à 19:22
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

DROP TABLE IF EXISTS `film`;
CREATE TABLE IF NOT EXISTS `film` (
  `reference` varchar(50) NOT NULL,
  `titre` varchar(50) DEFAULT NULL,
  `image_affiche` int(11) DEFAULT NULL,
  `lien_youtube` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`reference`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `film`
--

INSERT INTO `film` (`reference`, `titre`, `image_affiche`, `lien_youtube`) VALUES
('Singed', NULL, NULL, 'https://www.youtube.com/watch?v=1YgxTY4NxAw'),
('Darius', NULL, NULL, 'https://www.youtube.com/embed/yPmsbibywcI'),
('Qiyana', NULL, NULL, 'https://www.youtube.com/embed/EQOgrrmOAp8'),
('Yasuo', NULL, NULL, 'https://www.youtube.com/embed/Va1Q3ffWNPs'),
('Talon', NULL, NULL, 'https://www.youtube.com/embed/MyiXB-egH2Y'),
('Thresh', NULL, NULL, 'https://www.youtube.com/embed/IpF5G47wTAg');

-- --------------------------------------------------------

--
-- Structure de la table `recommande`
--

DROP TABLE IF EXISTS `recommande`;
CREATE TABLE IF NOT EXISTS `recommande` (
  `id_1` int(11) NOT NULL,
  `reference` varchar(50) NOT NULL,
  `id` int(11) DEFAULT NULL,
  `originalite` int(11) DEFAULT NULL,
  `scenario` int(11) DEFAULT NULL,
  `acteur` int(11) DEFAULT NULL,
  `mise_en_scene` int(11) DEFAULT NULL,
  `bande_son` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_1`,`reference`),
  KEY `reference` (`reference`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'Setz', '$2y$10$ebOvKVo4nbg0KFyy24UmBuuGigwCID38mZe/mUklNDQRrMevNabAe'),
(2, 'efzefezsf', '$2y$10$uLBMYpmsqaGMhEKLituOFuxOdH9OERTasE7UU4ZUTnXXrEmj9K5nq');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
