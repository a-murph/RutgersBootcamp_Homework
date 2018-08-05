CREATE DATABASE moviePlanner_db;

USE moviePlanner_db;

CREATE TABLE movies (
	id INTEGER(11)NOT NULL AUTO_INCREMENT,
	movie VARCHAR(80) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO movies (movie) VALUES
	("Princess Mononoke"),
	("The Girl Who Leapt Through Time"),
	("Akira"),
	("Ghost in the Shell"),
	("Perfect Blue");