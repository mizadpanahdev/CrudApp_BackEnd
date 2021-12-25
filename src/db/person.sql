create table person (
	id SERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	gender VARCHAR(50),
	date_of_birth DATE,
	country_of_birth VARCHAR(50)
);
insert into person (first_name,last_name,email,gender,date_of_birth,country_of_birth) values ('mohammad','izadpanah','mohammad.saein@gmail.com','Male','1985-08-10','Iran');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Olenka', 'Terlinden', 'oterlinden0@artisteer.com', 'Male', '2021-03-02', 'Canada');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Tammie', 'Grayston', 'tgrayston1@simplemachines.org', 'Female', '2021-10-26', 'Poland');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Zola', 'Fitkin', 'zfitkin2@fema.gov', 'Non-binary', '2021-06-25', 'China');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Greggory', 'Zohrer', 'gzohrer3@studiopress.com', 'Polygender', '2021-03-04', 'China');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Olag', 'Frankcomb', 'ofrankcomb4@ebay.co.uk', 'Bigender', '2021-01-28', 'Poland');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Clemmie', 'Ginnelly', 'cginnelly5@eepurl.com', 'Non-binary', '2021-03-04', 'France');