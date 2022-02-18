DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY, 
  name TEXT
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY, 
  label TEXT, 
  category_id INTEGER,
  CONSTRAINT fk_categories
    FOREIGN KEY(category_id)
      REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES ('vegan');
INSERT INTO categories (name) VALUES ('keto');
INSERT INTO categories (name) VALUES ('nut free');

INSERT INTO recipes (label, category_id) VALUES ('Udon', 1);
INSERT INTO recipes (label, category_id) VALUES ('Mee Pok', 2);
INSERT INTO recipes (label, category_id) VALUES ('Pasta', 1);
