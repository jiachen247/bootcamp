CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name TEXT,
    type TEXT,
    weight INTEGER
);

INSERT INTO cats (name, type, weight) VALUES ('Mr. Snuggles', 'Calico', 327);
INSERT INTO cats (name, type, weight) VALUES ('Jake AlPurrrrtsen', 'Bambino', 424);
INSERT INTO cats (name, type, weight) VALUES ('Furry Mc Furmeister', 'Persian', 512);
INSERT INTO cats (name, type, weight) VALUES ('Kai', 'LaPerm', 387);

-- Select all names of cats
SELECT name FROM cats;

-- Select all cat IDs
SELECT id, name FROM cats;

-- Select all cat name, id pairs
SELECT name, id FROM cats;

-- Select all cats
SELECT * FROM cats;

-- Select cat with id 1
SELECT * FROM cats WHERE id=1;

-- Update cat with id 2 to have name 'Susan Chan'
UPDATE cats SET name = 'Susan Chan' WHERE id=2;

-- Delete cat with id 2
DELETE FROM cats WHERE id=2;

-- Insert new cat
INSERT INTO cats (name, type, weight) VALUES ('Chubby Pants', 'Calico', 433);

-- Select all cats ordered by cat's name in ascending order
SELECT * FROM cats ORDER BY name ASC;

-- How many cats are there?
SELECT COUNT (*) FROM cats;