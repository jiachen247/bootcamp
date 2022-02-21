-- psql -d jiachen -f init_tables.sql
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS cat_owners;
CREATE TABLE cat_owners (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name TEXT,
    owner_id INTEGER,
    CONSTRAINT fk_owner
        FOREIGN KEY(owner_id)
        REFERENCES cat_owners(id)
);

INSERT INTO cat_owners (name) VALUES ('Jim');
INSERT INTO cat_owners (name) VALUES ('Cathy');
INSERT INTO cat_owners (name) VALUES ('Jiachen');

INSERT INTO cats (name, owner_id) VALUES ('Fluffy', 1);
INSERT INTO cats (name, owner_id) VALUES ('Furr Furr', 1);
INSERT INTO cats (name, owner_id) VALUES ('Gordon', 2);
INSERT INTO cats (name, owner_id) VALUES ('Susan Chan', 2);

SELECT recipes.id, recipes.label, recipes.category_id AS recipe_category_id, categories.id AS category_id, categories.name
FROM recipes
JOIN categories
ON categories.id = recipes.category_id;

SELECT recipes.id, recipes.label, recipes.category_id AS recipe_category_id, categories.id AS category_id, categories.name
FROM recipes, categories
WHERE recipes.category_id = categories.id;
