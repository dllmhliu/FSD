-- --------------------------------------------------------
-- Host:                           localhost
-- Server version:                        8.0.13 - MySQL Community Server - GPL
-- Server operating system:                      Win64
-- HeidiSQL version:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Expoet database structure of assignment7 
CREATE DATABASE IF NOT EXISTS `assignment7` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */;
USE `assignment7`;

-- Export table assignment7.t_comment structure
CREATE TABLE IF NOT EXISTS `t_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_type` varchar(2) COLLATE utf8mb4_bin NOT NULL DEFAULT '0' COMMENT '1:post comment,2:comment comment',
  `post_id` int(11) NOT NULL,
  `comment_id` int(11) DEFAULT NULL COMMENT 'comment for someone''s comment',
  `writer_id` int(11) NOT NULL,
  `content` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `del_flag` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:normal,1:deleted',
  `create_by` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_by` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t_comment_t_post` (`post_id`),
  KEY `FK_t_comment_t_comment` (`comment_id`),
  KEY `FK_t_comment_t_user` (`writer_id`),
  CONSTRAINT `FK_t_comment_t_comment` FOREIGN KEY (`comment_id`) REFERENCES `t_comment` (`id`),
  CONSTRAINT `FK_t_comment_t_post` FOREIGN KEY (`post_id`) REFERENCES `t_post` (`id`),
  CONSTRAINT `FK_t_comment_t_user` FOREIGN KEY (`writer_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='Comment';

-- Data export is deselected.
-- Table assignment7.t_favorite structure
CREATE TABLE IF NOT EXISTS `t_favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `del_flag` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:normal,1:deleted',
  `create_by` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_by` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t_favorite_t_post` (`post_id`),
  KEY `FK_t_favorite_t_user` (`user_id`),
  CONSTRAINT `FK_t_favorite_t_post` FOREIGN KEY (`post_id`) REFERENCES `t_post` (`id`),
  CONSTRAINT `FK_t_favorite_t_user` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='Favorite post';

-- Data export is deselected.
-- Table assignment7.t_follow structure
CREATE TABLE IF NOT EXISTS `t_follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `follow_user_id` int(11) NOT NULL COMMENT 'the user id someone is following',
  `user_id` int(11) NOT NULL,
  `del_flag` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:normal,1:deleted',
  `create_by` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_by` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t_follow_t_user` (`follow_user_id`),
  KEY `FK_t_follow_t_user_2` (`user_id`),
  CONSTRAINT `FK_t_follow_t_user` FOREIGN KEY (`follow_user_id`) REFERENCES `t_user` (`id`),
  CONSTRAINT `FK_t_follow_t_user_2` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='Follow relationship';

-- Data export is deselected.
-- Table assignment7.t_post structure
CREATE TABLE IF NOT EXISTS `t_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categorize` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT 'categorize type code',
  `author_id` int(11) NOT NULL,
  `content` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `del_flag` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:normal,1:deleted',
  `create_by` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_by` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t_post_t_user` (`author_id`),
  CONSTRAINT `FK_t_post_t_user` FOREIGN KEY (`author_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='Post';

-- Data export is deselected.
-- Table assignment7.t_post_tag structure
CREATE TABLE IF NOT EXISTS `t_post_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `tag` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `del_flag` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:normal,1:deleted',
  `create_by` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_by` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t_post_tag_t_post` (`post_id`),
  CONSTRAINT `FK_t_post_tag_t_post` FOREIGN KEY (`post_id`) REFERENCES `t_post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='Post tags';

-- Data export is deselected.
-- Table assignment7.t_user structure
CREATE TABLE IF NOT EXISTS `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `user_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `location` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT 'Location Details',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '1:normal,2:suspend',
  `source` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '1:Twitter,2:Facebook',
  `del_flag` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:normal,1:deleted',
  `create_by` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_by` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='User';

-- Data export is deselected.
-- Table assignment7.t_user_setting structure
CREATE TABLE IF NOT EXISTS `t_user_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `notify_followers` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT 'Notification of Followers.0:open,1:close',
  `notify_comments` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT 'Notification of Comments.0:open,1:close',
  `del_flag` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:normal,1:deleted',
  `create_by` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_by` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t_user_setting_t_user` (`user_id`),
  CONSTRAINT `FK_t_user_setting_t_user` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='User setting';

-- Data export is deselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
