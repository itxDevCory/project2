-- Drops the staykayDB if it exists currently --
DROP DATABASE IF EXISTS staykayDB;
-- Creates the "staykayDB" database 
CREATE DATABASE staykayDB;

CREATE TABLE dates (
    id INT NOT NULL AUTO_INCREMENT,
    firstday DATETIME,
	lastday DATETIME
);