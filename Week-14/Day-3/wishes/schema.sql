CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	wish VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES
	("Sora Nendoroid"),
	("Hellblade: Senua's Sacrifice"),
	("Kingdom Hearts HD 2.8 Final Chapter Prologue"),
	("Detroit: Become Human"),
	("Spider-Man");