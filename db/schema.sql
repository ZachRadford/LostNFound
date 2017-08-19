-- Created the DB
CREATE DATABASE lost_and_found;
USE lost_and_found;

-- Created the table "users" 
CREATE TABLE users (
  userid int AUTO_INCREMENT,
  name varchar(99) NOT NULL,
  item varchar NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE items (
	itemid int AUTO_INCREMENT,
	type varchar NOT NULL,
	size varchar NOT NULL,
	color varchar NOT NULL,
	attributes varchar,
	-- Point ( Lat, Long, SRID ) SRID
	-- SRID is an int expression representing the SRID of the--
	--geography instance you wish to return. --
	location point,
	PRIMARY KEY (itemid),
	FOREIGN KEY (userid) REFERENCES users (userid)
);
