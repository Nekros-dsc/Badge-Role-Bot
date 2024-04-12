-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 24 mai 2023 à 11:53
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `s307_botdiscord`
--

-- --------------------------------------------------------

--
-- Structure de la table `badgerole`
--

CREATE TABLE `badgerole` (
  `guildId` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'off',
  `equipediscord` varchar(255) DEFAULT NULL,
  `partenaire` varchar(255) DEFAULT NULL,
  `ancienmodo` varchar(255) DEFAULT NULL,
  `hypesquadevent` varchar(255) DEFAULT NULL,
  `hypesquadbra` varchar(255) DEFAULT NULL,
  `hypesquadbril` varchar(255) DEFAULT NULL,
  `hypesquadbal` varchar(255) DEFAULT NULL,
  `chass1` varchar(255) DEFAULT NULL,
  `chass2` varchar(255) DEFAULT NULL,
  `dev` varchar(255) DEFAULT NULL,
  `soutien` varchar(255) DEFAULT NULL,
  `activedev` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `badgerole`
--

INSERT INTO `badgerole` (`guildId`, `status`, `equipediscord`, `partenaire`, `ancienmodo`, `hypesquadevent`, `hypesquadbra`, `hypesquadbril`, `hypesquadbal`, `chass1`, `chass2`, `dev`, `soutien`, `activedev`) VALUES
('1109518244743757930', 'on', '1110599314822156350', '1110599315942014997', '1110599322313166858', '1110599323386916874', '1110599324418703380', '1110599316898332854', '1110599325295333387', '1110599318198562877', '1110599319234555965', '1110599320165683210', '1110599321168130088', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;