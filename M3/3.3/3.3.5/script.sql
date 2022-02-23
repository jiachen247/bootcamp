DROP TABLE IF EXISTS recipe_ingredients;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS ingredients;

CREATE TABLE recipes ( id SERIAL PRIMARY KEY, label TEXT);
CREATE TABLE ingredients ( id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE recipe_ingredients ( id SERIAL PRIMARY KEY, recipe_id INTEGER, ingredient_id INTEGER, measurement TEXT);

INSERT INTO recipes ( label ) VALUES ('Udon');
INSERT INTO recipes ( label ) VALUES ('Mee Pok');
INSERT INTO recipes ( label ) VALUES ('Pasta');

INSERT INTO ingredients ( name ) VALUES ('fish ball');
INSERT INTO ingredients ( name ) VALUES ('soy sauce');
INSERT INTO ingredients ( name ) VALUES ('sesame oil');

INSERT INTO recipe_ingredients ( recipe_id, ingredient_id, measurement ) VALUES (1, 2, '2 tbls');
INSERT INTO recipe_ingredients ( recipe_id, ingredient_id, measurement ) VALUES (1, 3, '1 tbls');
INSERT INTO recipe_ingredients ( recipe_id, ingredient_id, measurement ) VALUES (2, 1, '4');
INSERT INTO recipe_ingredients ( recipe_id, ingredient_id, measurement ) VALUES (2, 3, '2 tbls');