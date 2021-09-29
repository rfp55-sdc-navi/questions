CREATE DATABASE qanda;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id sSERIAL PRIMARY KEY
);

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question_body VARCHAR(1000) NOT NULL,
  question_date DATE default current_timestamp,
  asker_name VARCHAR(60) NOT NULL,
  asker_email VARCHAR(60) NOT NULL,
  question_helpfulness INT NOT NULL default 0,
  reported boolean default false,
  product_id INT references products(id)
);

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  answer_body VARCHAR(1000) NOT NULL,
  created_at DATE default current_timestamp,
  answerer_name VARCHAR(60) NOT NULL,
  answerer_email VARCHAR(60) NOT NULL,
  helpfulness INT default 0,
  reported boolean default false,
  question_id INT references questions(id)
);

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(250) NOT NULL,
  answer_id INT references answers(id)
);

-- COPY answers FROM '/Users/JohnFa 1/Desktop/Hack Reactor/SDC/questionsAPI/data/answers.csv' DELIMITER ',' CSV HEADER;
-- COPY answers_photos FROM '/Users/JohnFa 1/Desktop/Hack Reactor/SDC/questionsAPI/data/answers_photos.csv' DELIMITER ',' CSV HEADER;
-- COPY questions FROM '/Users/JohnFa 1/Desktop/Hack Reactor/SDC/questionsAPI/data/questions.csv' DELIMITER ',' CSV HEADER;



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