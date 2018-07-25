CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
    artist VARCHAR(30) NOT NULL,
    song VARCHAR(80) NOT NULL,
    year INTEGER(4) NOT NULL,
    total_score FLOAT(5, 3),
    us_score FLOAT(5, 3),
    uk_score FLOAT(5, 3),
    eu_score FLOAT(5, 3),
    ms_score FLOAT(5, 3),
    PRIMARY KEY (id)
);