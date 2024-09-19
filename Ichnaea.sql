-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ichnaea
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,'Vud2uvzu2vsvuwvzu','2024-09-13 10:22:57'),(2,'Bskwwnsnnw','2024-09-15 03:47:46');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `find`
--

DROP TABLE IF EXISTS `find`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `find` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seek_item` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `find`
--

LOCK TABLES `find` WRITE;
/*!40000 ALTER TABLE `find` DISABLE KEYS */;
/*!40000 ALTER TABLE `find` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `finder`
--

DROP TABLE IF EXISTS `finder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `finder` (
  `finder_id` int NOT NULL AUTO_INCREMENT,
  `id` int DEFAULT NULL,
  `description` text NOT NULL,
  `seek_item` varchar(245) NOT NULL,
  `image` varchar(245) DEFAULT NULL,
  `location` varchar(245) NOT NULL,
  `email` varchar(245) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`finder_id`),
  KEY `finder_ibfk_1` (`id`),
  CONSTRAINT `finder_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `finder`
--

LOCK TABLES `finder` WRITE;
/*!40000 ALTER TABLE `finder` DISABLE KEYS */;
INSERT INTO `finder` VALUES (5,NULL,'Color white','Phone','/uploads/image-1726203602912.jpg','IT','202180170@psu.palawan.edu.ph','Lorenz','Lucio',NULL),(6,NULL,'Color green','Laptop','/uploads/image-1726380309500.jpg','Cs','202180170@psu.palawan.edu.ph','Lor','Luc',NULL),(7,NULL,'Black','Ballpen','/uploads/image-1726381206385.jpg','CS','202180170@psu.palawan.edu.ph','Al','Drin',NULL),(8,NULL,'color pink','notebook',NULL,'canteen','202180170@psu.palawan.edu.ph','ka','da','2024-09-15 09:33:24'),(9,NULL,'Color black that has a 200 pesos ','Oxgn Wallet','/uploads/image-1726448917938.jpg','Gate or Library ','llorenz.10022002@gmail.com','Jos','Ser','2024-09-16 01:08:38'),(10,NULL,'Green','Bag','/uploads/image-1726449114641.jpg','Canteen ','llorenz.10022002@gmail.com','Jsjs','Jeje','2024-09-16 01:11:54'),(11,NULL,'Color white with flower design','Towel','/uploads/image-1726462426552.jpg','Canteen dining table','202180374@psu.palawan.edu.ph','Nonoy','Tibudan','2024-09-16 04:53:46'),(12,NULL,'Brown','Jacket','/uploads/image-1726465021910.jpg','In CAH building','llorenz.10022002@gmail.com','Lor','Lo','2024-09-16 05:37:01');
/*!40000 ALTER TABLE `finder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `founders`
--

DROP TABLE IF EXISTS `founders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `founders` (
  `founder_id` int NOT NULL AUTO_INCREMENT,
  `id` int DEFAULT NULL,
  `description` text NOT NULL,
  `found_item` varchar(45) NOT NULL,
  `image` varchar(245) DEFAULT NULL,
  `location` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`founder_id`),
  KEY `founders_ibfk_1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `founders`
--

LOCK TABLES `founders` WRITE;
/*!40000 ALTER TABLE `founders` DISABLE KEYS */;
INSERT INTO `founders` VALUES (3,NULL,'Color white','Phone','/uploads/image-1726203641221.jpg.jpeg','IT','llorenz.10022002@gmail.com','Nikita','Abela',NULL),(4,NULL,'Color green','Laptop','/uploads/image-1726380629085.jpg.jpeg','Cs','llorenz.10022002@gmail.com','Nik','Ab',NULL),(5,NULL,'Black','Ballpen','/uploads/image-1726381249813.jpg.jpeg','CS','llorenz.10022002@gmail.com','Ken','Neth',NULL),(6,NULL,'Pink','big notebook',NULL,'canteen','llorenz.10022002@gmail.com','we','tre',NULL),(7,NULL,'Color Black ','Wallet','/uploads/image-1726448952422.jpg','Library ','202180170@psu.palawan.edu.ph','Jo','Ga',NULL),(8,NULL,'Color green','Bag','/uploads/image-1726449151035.jpg','It','202180170@psu.palawan.edu.ph','Bddj','Ndne',NULL),(9,NULL,'Color white','Towel','/uploads/image-1726462489473.jpg','Canteen','202180418@psu.palawan.edu.ph','Jeha','Batoon','2024-09-16 04:54:49');
/*!40000 ALTER TABLE `founders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `finder_id` int NOT NULL,
  `founder_id` int NOT NULL,
  `matched_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `finder_name` varchar(255) DEFAULT NULL,
  `finder_item` varchar(255) DEFAULT NULL,
  `finder_location` varchar(255) DEFAULT NULL,
  `finder_description` text,
  `founder_name` varchar(255) DEFAULT NULL,
  `founder_item` varchar(255) DEFAULT NULL,
  `founder_location` varchar(255) DEFAULT NULL,
  `founder_description` text,
  `finder_email` varchar(255) DEFAULT NULL,
  `founder_email` varchar(255) DEFAULT NULL,
  `notified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (77,5,3,'2024-09-16 04:48:00','Lorenz Lucio','Phone','IT','Color white','Nikita Abela','Phone','IT','Color white','202180170@psu.palawan.edu.ph','llorenz.10022002@gmail.com',1),(78,6,4,'2024-09-16 04:48:00','Lor Luc','Laptop','Cs','Color green','Nik Ab','Laptop','Cs','Color green','202180170@psu.palawan.edu.ph','llorenz.10022002@gmail.com',1),(79,7,5,'2024-09-16 04:48:00','Al Drin','Ballpen','CS','Black','Ken Neth','Ballpen','CS','Black','202180170@psu.palawan.edu.ph','llorenz.10022002@gmail.com',1),(80,8,6,'2024-09-16 04:48:00','ka da','notebook','canteen','color pink','we tre','big notebook','canteen','Pink','202180170@psu.palawan.edu.ph','llorenz.10022002@gmail.com',1),(81,9,7,'2024-09-16 04:48:00','Jos Ser','Oxgn Wallet','Gate or Library ','Color black that has a 200 pesos ','Jo Ga','Wallet','Library ','Color Black ','llorenz.10022002@gmail.com','202180170@psu.palawan.edu.ph',1),(84,11,9,'2024-09-16 04:55:00','Nonoy Tibudan','Towel','Canteen dining table','Color white with flower design','Jeha Batoon','Towel','Canteen','Color white','202180374@psu.palawan.edu.ph','202180418@psu.palawan.edu.ph',1);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'loo','dfd','fvdvdvdfvdvdv','pass',NULL,'user'),(2,'Lorenz','Lucio','llorenz.10022002@gmail.com','pass',NULL,'User'),(3,'Nikita','Abela','renzyats@gmail.com','pass',NULL,'Nikki');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-19  8:05:47
