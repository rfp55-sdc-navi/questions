
-- brew services start postgresql
-- psql postgres -U root
-- brew services stop postgresql

-- CREATE DATABASE qa;

DROP TABLE IF EXISTS answers_photos;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  body TEXT,
  date_written BIGINT,
  asker_name TEXT,
  asker_email TEXT,
  reported INTEGER,
  helpful INTEGER
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  question_id INTEGER references questions(id),
  body TEXT,
  date_written BIGINT,
  answerer_name TEXT,
  answerer_email TEXT,
  reported INTEGER,
  helpful INTEGER
);

CREATE TABLE answers_photos (
  id SERIAL PRIMARY KEY,
  answer_id INTEGER references answers(id),
  photo_url TEXT
);

-----------INDEX-------------
-- CREATE INDEX questionsProductIdIndex ON questions(product_id);
-- CREATE INDEX answersQuestionIdIndex ON answers(question_id);
-- CREATE INDEX answersPhotosIdIndex ON answers_photos(answer_id);



-----------ETL-------------

-- COPY questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful) FROM '/Users/JohnFa 1/Desktop/Hack Reactor/SDC/questionsAPI/data/questions.csv' DELIMITER ',' CSV HEADER;

-- COPY answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful) FROM '/Users/JohnFa 1/Desktop/Hack Reactor/SDC/questionsAPI/data/answers.csv' DELIMITER ',' CSV HEADER;

-- COPY answers_photos (id, answer_id, photo_url) FROM '/Users/JohnFa 1/Desktop/Hack Reactor/SDC/questionsAPI/data/answers_photos.csv' DELIMITER ',' CSV HEADER;




-----------Notes-------------

-- select *
-- from pg_indexes
-- where tablename not like 'pg%';


-- ALTER TABLE reviews ADD INDEX product_id (product_id)

-- CREATE INDEX <index-name> ON <table-name> (<column-name>)
-- select *
-- from pg_indexes
-- where tablename not like 'pg%';


-- SELECT MAX(the_primary_key) FROM the_table;
-- SELECT nextval('the_primary_key_sequence');
-- SELECT setval('the_primary_key_sequence', (SELECT MAX(the_primary_key) FROM the_table)+1);
-- SELECT pg_get_serial_sequence('questions', 'id');














-- CREATE TABLE `products` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- DROP TABLE IF EXISTS `questions`;

-- CREATE TABLE `questions` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `question_body` VARCHAR(1000) NULL DEFAULT NULL,
--   `question_date` DATE NULL DEFAULT NULL,
--   `asker_name` VARCHAR(60) NULL DEFAULT NULL,
--   `asker_email` VARCHAR(60) NULL DEFAULT NULL,
--   `question_helpfulness` INTEGER NULL DEFAULT NULL,
--   `question_reported` VARCHAR(Boolean) NULL DEFAULT 'false',
--   `product_id` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );


-- DROP TABLE IF EXISTS `answers`;

-- CREATE TABLE `answers` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `question_id` INTEGER NULL DEFAULT NULL,
--   `answerer_name` VARCHAR(60) NULL DEFAULT NULL,
--   `answerer_email` VARCHAR(60) NULL DEFAULT NULL,
--   `answer_body` VARCHAR(1000) NULL DEFAULT NULL,
--   `answer_date` DATE NULL DEFAULT NULL,
--   `answer_helpfulness` INTEGER NULL DEFAULT NULL,
--   `answer_reported` VARCHAR(Boolean) NULL DEFAULT 'false',
--   PRIMARY KEY (`id`)
-- );


-- DROP TABLE IF EXISTS `photos`;

-- CREATE TABLE `photos` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `answer_id` INTEGER NULL DEFAULT NULL,
--   `url` VARCHAR(250) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `questions` ADD FOREIGN KEY (product_id) REFERENCES `products` (`id`);
-- ALTER TABLE `answers` ADD FOREIGN KEY (question_id) REFERENCES `questions` (`id`);
-- ALTER TABLE `photos` ADD FOREIGN KEY (answer_id) REFERENCES `answers` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `products` (`id`) VALUES
-- ('');
-- INSERT INTO `questions` (`id`,`question_body`,`question_date`,`asker_name`,`asker_email`,`question_helpfulness`,`question_reported`,`product_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `answers` (`id`,`question_id`,`answerer_name`,`answerer_email`,`answer_body`,`answer_date`,`answer_helpfulness`,`answer_reported`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `photos` (`id`,`answer_id`,`url`) VALUES
-- ('','','');





-- pg_dump -h localhost qa | psql -U root -h ec2-3-141-44-68.us-east-2.compute.amazonaws.com qa