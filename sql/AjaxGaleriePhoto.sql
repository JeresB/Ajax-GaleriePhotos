-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 08 Juin 2017 à 15:34
-- Version du serveur: 5.5.55-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `AjaxGaleriePhoto`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE IF NOT EXISTS `commentaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_image` int(5) NOT NULL,
  `commentaire` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Contenu de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `id_image`, `commentaire`) VALUES
(1, 0, 'tres null'),
(2, 0, 'putain de merde'),
(3, 0, 'uuhnji'),
(4, 0, 'test'),
(5, 0, 'un commentaire ?'),
(6, 0, 'test'),
(7, 0, 'test'),
(8, 0, 'azerty'),
(9, 0, 'azerty'),
(10, 2, 'ciel'),
(11, 3, 'beau ciel bleu'),
(12, 1, 'fleur'),
(13, 1, 'Belle Pétales'),
(14, 0, 'sa mache'),
(15, 2, 'belle montagne'),
(16, 0, 'ouiiuhji'),
(17, 1, 'ytgyuhu'),
(18, 0, 'test'),
(19, 2, 'uyguyg');

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `bigUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `photos`
--

INSERT INTO `photos` (`id`, `title`, `url`, `bigUrl`) VALUES
(1, 'Fleur', 'images/1.png', 'imagesBig/1.png'),
(2, 'Ciel', 'images/2.jpg', 'imagesBig/2.jpg'),
(3, 'Paysage', 'images/3.jpg', 'imagesBig/3.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
